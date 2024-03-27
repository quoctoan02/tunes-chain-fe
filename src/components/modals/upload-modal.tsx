"use client"

import React, { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import useUploadModal from "@/hooks/render/use-upload-modal"
import Input from "@/libs/ui/input/input"
import Button from "@/libs/ui/buttons/button"
import { DragDropImage } from "../drag-drop/drag-drop-image"
import { DragDropMedia } from "../drag-drop/drag-drop-audio"
import InputSelect from "@/libs/ui/input/input-select"
import SearchSelect from "@/libs/ui/input/debounce-select"
import Modal from "@/libs/ui/modal"

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState(false)

  const uploadModal = useUploadModal()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onClose = () => {
    // reset()
    uploadModal.onClose()
    console.log(uploadModal.isOpen)
  }

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // try {
    //   setIsLoading(true)
    //   const imageFile = values.image?.[0]
    //   const songFile = values.song?.[0]
    //   if (!imageFile || !songFile || !user) {
    //     toast.error("Missing fields")
    //     return
    //   }
    //   // Upload song
    //   const { data: songData, error: songError } = await supabaseClient.storage
    //     .from("songs")
    //     .upload(`song-${values.title}-${uniqueID}`, songFile, {
    //       cacheControl: "3600",
    //       upsert: false,
    //     })
    //   if (songError) {
    //     setIsLoading(false)
    //     return toast.error("Failed song upload")
    //   }
    //   // Upload image
    //   const { data: imageData, error: imageError } = await supabaseClient.storage
    //     .from("images")
    //     .upload(`image-${values.title}-${uniqueID}`, imageFile, {
    //       cacheControl: "3600",
    //       upsert: false,
    //     })
    //   if (imageError) {
    //     setIsLoading(false)
    //     return toast.error("Failed image upload")
    //   }
    //   // Create record
    //   const { error: supabaseError } = await supabaseClient.from("songs").insert({
    //     user_id: user.id,
    //     title: values.title,
    //     author: values.author,
    //     image_path: imageData.path,
    //     song_path: songData.path,
    //   })
    //   if (supabaseError) {
    //     return toast.error(supabaseError.message)
    //   }
    //   router.refresh()
    //   setIsLoading(false)
    //   toast.success("Song created!")
    //   reset()
    //   uploadModal.onClose()
    // } catch (error) {
    //   toast.error("Something went wrong")
    // } finally {
    //   setIsLoading(false)
    // }
  }

  return (
    <Modal title="Upload your music ???" width={"fit-content"} onCancel={onClose} open={uploadModal.isOpen}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <div className="flex gap-x-8">
          <div className="flex flex-col justify-center gap-y-4">
            <div>
              <div className="">Select a song file</div>
              {/* <Input
            placeholder="test"
            disabled={isLoading}
            type="file"
            accept=".mp3"
            id="song"
            {...register("song", { required: true })}
          /> */}
              <DragDropImage
              // title={"upload image"}
              // image={banner_images?.images.bannerImage}
              // callBackImageUpload={(image) => handleUploadImageAction(image, "bannerImage", "images")}
              />
            </div>

            <div>
              <label className="">Select an image of song</label>
              <DragDropMedia
              // title={"upload image"}
              // image={banner_images?.images.bannerImage}
              // callBackImageUpload={(image) => handleUploadImageAction(image, "bannerImage", "images")}
              />
              {/* <Input
            placeholder="test"
            disabled={isLoading}
            type="file"
            accept="image/*"
            id="image"
            {...register("image", { required: true })}
          /> */}
            </div>
          </div>
          <div className="flex w-80 flex-col gap-y-6">
            <div className="flex w-full flex-col gap-y-1">
              <label className="text-neutral-300">Song title</label>
              <Input
                id="title"
                disabled={isLoading}
                {...register("title", { required: true })}
                placeholder=".e.g Sau loi tu khuoc"
              />
              {errors.title && <span className="text-sm text-red-500">Title is required</span>}
            </div>
            {/* <div className="flex items-center justify-between gap-x-4"> */}
            <div className="flex w-full flex-col gap-y-1">
              <label className="text-neutral-300">Collaborator</label>
              <InputSelect placeholder="Select your collaborator" />
            </div>
            <div className="flex w-full flex-col gap-y-1">
              <label className="text-neutral-300">Album</label>
              <InputSelect placeholder="Select your album" />
            </div>
            {/* </div> */}
            <div className="flex w-full flex-col gap-y-1">
              <label className="text-neutral-300">Add your music genres</label>
              <InputSelect placeholder="Select your collaborator" />
            </div>
          </div>
        </div>
        <Button disabled={isLoading} type="submit">
          Publish
        </Button>
      </form>
    </Modal>
  )
}

export default UploadModal
