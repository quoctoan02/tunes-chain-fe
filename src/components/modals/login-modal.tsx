"use client"

import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import Button from "@/libs/ui/buttons/button"
import Input from "@/libs/ui/input/input"
import { useNavigate } from "react-router-dom"
import { Service } from "@/services/app.service"
import { toast } from "react-toastify"
import useLoginModal from "@/hooks/auth/use-login-modal"
import Modal from "@/libs/ui/modal"
import { useUserStore } from "@/hooks/stores/use-user-store"
import useSignupModal from "@/hooks/auth/use-signup-modal"
import { useArtistStore } from "@/hooks/stores/use-artist-store"

const LoginModal = () => {
  const { onClose, isOpen } = useLoginModal()

  // useEffect(() => {
  //   if (session) {
  //     router.refresh();
  //     onClose();
  //   }
  // }, [session, router, onClose]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const { loginEmail, token, address, logout } = useArtistStore()
  const onSubmit = async (data: any) => {
    console.log("🚀 ~ onSubmit ~ data:", data)
    // Xử lý đăng nhập ở đây
    if (await loginEmail(data.email, data.password)) {
      onClose()
      reset()
    }
  }
  const signupModal = useSignupModal()
  const handleRedirectSignup = () => {
    onClose()
    signupModal.onOpen()
  }
  return (
    <Modal open={isOpen} width={"fit-content"} onCancel={onClose}>
      <div className="p-8">
        <h3 className="mb-6 text-2xl font-semibold">Login to Tunes chain</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="text-md block font-medium text-neutral-400">
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              {...register("email", { required: true })}
              // className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <span className="text-sm text-red-500">Email is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-md block font-medium text-neutral-400">
              Password
            </label>
            <Input
              type="password"
              id="password"
              {...register("password", { required: true })}
              // className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <span className="text-sm text-red-500">Password is required</span>}
          </div>
          <Button
            type="submit"
            // className="w-full rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            Login
          </Button>
        </form>
        {/* <div className="mt-4 flex items-center justify-between">
          <div className="w-full border-b border-gray-400"></div>
          <span className="text-neutral-500">or</span>
          <div className="w-full border-b border-gray-400"></div>
        </div> */}
        {/* <div className="mt-4 flex items-center justify-center space-x-4">
          <button className="flex items-center rounded-md bg-blue-700 px-4 py-2 text-white">
            <FcGoogle className="mr-2" />
            Login with Google
          </button>
          <button className="flex items-center rounded-md bg-blue-900 px-4 py-2 text-white">
            <FaFacebook className="mr-2" />
            Login with Facebook
          </button>
        </div> */}
        <div className="mt-4 flex justify-between">
          <button className="text-blue-500 hover:underline">Forgot Password?</button>
          <button className="text-blue-500 hover:underline" onClick={handleRedirectSignup}>
            Sign Up
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default LoginModal
