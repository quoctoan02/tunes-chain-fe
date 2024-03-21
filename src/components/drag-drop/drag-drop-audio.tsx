import { Loading } from "@/libs/ui/loading"
import { Service } from "@/services/app.service"
import { MediaFileType } from "@/types/media.type"
import { cn } from "@/utils/classnames"
import { FC, useEffect, useRef, useState } from "react"
import { HiMusicNote } from "react-icons/hi"
import { toast } from "react-toastify"

interface DragDropAudioProps {
  title?: string
  file?: any
  callBackMediaUpload?: any
  className?: string
  sizeWidth?: number
  sizeHeight?: number
  withBox?: boolean
}
export const DragDropMedia: FC<DragDropAudioProps> = ({
  title = "",
  file,
  callBackMediaUpload,
  className,
  sizeWidth,
  sizeHeight,
  withBox,
}) => {
  const [loading, setLoading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [previewData, setPreviewData] = useState(null)

  const uploadRef: any = useRef(null)

  // useEffect(() => {
  //   setPreviewData(file.name)
  // }, [file.name])

  const handleDrag = function (e: any) {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = async (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    const files = e.dataTransfer.files

    if (!validateFileType(files[0]) || !validateFileSize(files[0])) {
      return
    }

    if (files && uploadRef.current) {
      uploadRef.current.files = files
      await preview(files[0])
    }
  }

  const validateFileSize = (file: any) => {
    const maxSize = 15 * 1024 * 1024 // 5MB

    if (file.size > maxSize) {
      toast.error("Audio file size exceeds the limit")
      return false
    }

    return true
  }

  const validateFileType = (file: any) => {
    const allowedExtensions = ["mp3", "ogg", "wav"]
    const fileExtension = file.name.split(".").pop().toLowerCase()

    if (!allowedExtensions.includes(fileExtension)) {
      toast.error("Invalid audio file type")
      return false
    }

    return true
  }

  async function selectFile(e: any) {
    const files = e.target.files
    if (!files?.length) return

    if (!validateFileType(files[0]) || !validateFileSize(files[0])) {
      return
    }

    const file = files[0]
    await preview(file)
  }

  const preview = async (file: any) => {
    try {
      setLoading(true)
      const file = uploadRef?.current?.files?.[0]
      console.log("🚀 ~ preview ~ file:", file)
      if (file) {
        const result = await Service.upload.uploadAudio(file)
        if (result) {
          setPreviewData(file.name)
          callBackMediaUpload && callBackMediaUpload(result)
        }
      }
    } catch (error) {
      console.log("🚀 ~ file: DragDropPrimary.jsx:60 ~ handleUploadImage ~ error:", error)
    } finally {
      setLoading(false)
    }

    // const reader = new FileReader()
    // reader.onloadend = () => {
    //   setPreviewData(reader.result)
    // }
    // reader.readAsDataURL(file)
  }

  const handleRemoveFile = () => {
    setPreviewData(null)
    if (uploadRef.current) {
      uploadRef.current.value = ""
    }
    callBackMediaUpload && callBackMediaUpload("")
  }

  const renderContent = () => {
    if (loading) {
      return <Loading />
    } else if (previewData) {
      return (
        <div className={cn("flex h-full w-full flex-col items-center justify-center gap-y-2 px-4")}>
          <HiMusicNote size={30} />

          <span>{previewData}</span>
        </div>
      )
    }

    return (
      <div className={cn("flex h-full w-full flex-col items-center justify-center py-10")}>
        <img src="/icons/icon-upload.svg" alt="Audio" />

        <p className="mt-2 text-center text-sm font-medium text-neutral-500">
          Drag & drop audio file or <span className="cursor-pointer text-blue-500">Browse</span>
        </p>

        <p className="mt-1 text-center text-sm text-neutral-500">Supported formates: MP3, OGG, WAV</p>
      </div>
    )
  }

  return (
    <div className={cn(className, withBox)}>
      <div className={cn("flex flex-col gap-2", withBox)}>
        <div className={cn("flex max-w-[19.75rem] items-center justify-between")}>
          <p className="text-sx text-stone-500">{title}</p>

          {previewData && (
            <p className="text-sx cursor-pointer text-blue-500" onClick={handleRemoveFile}>
              Remove file
            </p>
          )}
        </div>

        <div
          role="button"
          className={cn(
            "flex h-[9.875rem] flex-row items-center justify-center overflow-hidden rounded-lg border border-dashed",
            dragActive ? "border-green-500" : "border-stone-300",
            withBox ? withBox : "w-[19.75rem]",
          )}
          onClick={function () {
            uploadRef.current.click()
          }}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {renderContent()}
        </div>
      </div>
      <input ref={uploadRef} type="file" accept="audio/*" className="hidden" onChange={selectFile} />
    </div>
  )
}
