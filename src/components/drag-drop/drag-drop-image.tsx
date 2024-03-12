import { iconUpload } from "@/assets"
import { Service } from "@/services/app.service"
import { cn } from "@/utils/classnames"
import { FC, useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"

interface DragDropImageProps {
  title?: string
  image?: any
  callBackImageUpload?: any
  className?: string
  sizeWidth?: number
  sizeHeight?: number
  withBox?: boolean
}
export const DragDropImage: FC<DragDropImageProps> = ({
  title = "",
  image,
  callBackImageUpload,
  className,
  sizeWidth,
  sizeHeight,
  withBox,
}) => {
  const [loading, setLoading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [previewData, setPreviewData] = useState("")

  const uploadRef = useRef(null)

  useEffect(() => {
    setPreviewData(image)
  }, [image])

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
    const validateSize = await validateDimensionSize(files[0])

    if (!validateSize) {
      return
    }

    if (!validateFileType(files[0]) || !validateFileSize(files[0])) {
      return
    }

    if (files && uploadRef.current) {
      uploadRef?.current?.files = files
      preview(files[0])
    }
  }

  const validateDimensionSize = async (file: any) => {
    if (sizeHeight && sizeWidth) {
      const maxWidth = sizeWidth
      const maxHeight = sizeHeight

      // eslint-disable-next-line no-undef
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = function () {
          const { width, height } = this

          if (width > maxWidth || height > maxHeight) {
            toast.error("Invalid image dimensions")
            reject(false)
          } else {
            resolve(true)
          }
        }
        img.onerror = function () {
          toast.error("Failed to load image")
          reject(false)
        }
        img.src = URL.createObjectURL(file)
      })
    }

    return true
  }

  const validateFileSize = (file: any) => {
    const maxSize = 5 * 1024 * 1024 // 5MB

    if (file.size > maxSize) {
      toast.error("Image size exceeds the limit")
      return false
    }

    return true
  }

  const validateFileType = (file: any) => {
    const allowedExtensions = ["jpeg", "png", "jpg"]
    const fileExtension = file.name.split(".").pop().toLowerCase()

    if (!allowedExtensions.includes(fileExtension)) {
      toast.error("Invalid file type")
      return false
    }

    return true
  }

  async function selectImage(e: any) {
    const files = e.target.files
    if (!files?.length) return

    const validateSize = await validateDimensionSize(files[0])
    if (!validateSize) {
      return
    }

    if (!validateFileType(files[0]) || !validateFileSize(files[0])) {
      return
    }

    const file = files[0]
    preview(file)
  }

  const preview = async (file: any) => {
    try {
      setLoading(true)
      const file = uploadRef?.current?.files?.[0]
      if (file) {
        const result = await Service.upload.uploadImage(file)
        if (result) {
          setPreviewData(result)
          callBackImageUpload && callBackImageUpload(result)
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

  const handleRemoveImage = () => {
    setPreviewData("")
    if (uploadRef.current) {
      uploadRef.current.value = ""
    }
    callBackImageUpload && callBackImageUpload("")
  }

  const renderContent = () => {
    if (loading) {
      return <Loading />
    } else if (previewData) {
      return (
        <div className={cn("h-full w-full")}>
          <img src={previewData} className="h-full w-full object-contain" />
        </div>
      )
    }

    return (
      <div className={cn("flex h-full w-full flex-col items-center justify-center py-10")}>
        <img src={iconUpload} alt="Image" />

        <p className="mt-2 text-center text-sm font-medium text-stone-950">
          {t("Common.dragAndDrop")} <span className="cursor-pointer text-blue-500">{t("Common.browse")}</span>
        </p>

        <p className="mt-1 text-center text-sm text-stone-500">{t("Common.supportedFormates")}</p>
      </div>
    )
  }

  return (
    <div className={cn(className, withBox)}>
      <div className={cn("flex flex-col gap-2", withBox)}>
        <div className={cn("flex max-w-[19.75rem] items-center justify-between")}>
          <p className="text-sx text-stone-500">{title}</p>

          {previewData && (
            <p className="text-sx cursor-pointer text-blue-500" onClick={handleRemoveImage}>
              {t("removeImage")}
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
            uploadRef.current?.click()
          }}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {renderContent()}
        </div>
      </div>
      <input ref={uploadRef} type="file" accept="image/*" className="hidden" onChange={selectImage} />
    </div>
  )
}
