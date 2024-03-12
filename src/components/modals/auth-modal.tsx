"use client"

import React, { useEffect } from "react"

import Modal from "./modal"
import useAuthModal from "@/hooks/auth/use-auth-modal"
import { DragDropImage } from "../drag-drop/drag-drop-image"

const AuthModal = () => {
  const { onClose, isOpen } = useAuthModal()

  // useEffect(() => {
  //   if (session) {
  //     router.refresh();
  //     onClose();
  //   }
  // }, [session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  return (
    <Modal title="Welcome back" description="Login to your account." isOpen={isOpen} onChange={onChange}>
      <div>
        <DragDropImage
          title={"upload image"}
          image={banner_images?.images.bannerImage}
          // callBackImageUpload={(image) => handleUploadImageAction(image, "bannerImage", "images")}
        />
      </div>
      {/* <Auth
       // supabaseClient={supabaseClient}
        providers={['github']}
        magicLink={true}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#404040',
                brandAccent: '#22c55e'
              }
            }
          }
        }}
        theme="dark"
      /> */}
    </Modal>
  )
}

export default AuthModal
