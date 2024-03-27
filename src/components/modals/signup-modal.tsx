import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Button from "@/libs/ui/buttons/button"
import Input from "@/libs/ui/input/input"
import Modal from "@/libs/ui/modal"
import { useArtistStore } from "@/hooks/stores/use-artist-store"
import useLoginModal from "@/hooks/auth/use-login-modal"
import useSignupModal from "@/hooks/auth/use-signup-modal"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai" // Import icon con mắt

const SignupModal = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false) // State để điều khiển ẩn/hiện confirm password
  const { onClose, isOpen } = useSignupModal()
  const loginModal = useLoginModal()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm()
  const { token, signup } = useArtistStore()

  const onSubmit = async (data: any) => {
    delete data.confirmPassword
    data.avatar = "aaa"
    data.genres = ["abc"]
    console.log("🚀 ~ onSubmit ~ data:", data)

    if (await signup(data)) {
      handleRedirectToLogin()
      reset()
    }
  }

  const handleRedirectToLogin = () => {
    onClose()
    loginModal.onOpen()
  }

  return (
    <Modal open={isOpen} width={"fit-content"} onCancel={onClose}>
      <div className="p-8">
        <h1 className="mb-6 text-center text-3xl font-semibold">Sign up for Tunes chain</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="text-md block font-medium text-neutral-400">
              Display Name
            </label>
            <Input id="name" {...register("name", { required: true })} />
            {errors.name && <span className="text-sm text-red-500">Display name is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-md block font-medium text-neutral-400">
              Email Address
            </label>
            <Input type="email" id="email" {...register("email", { required: true })} />
            {errors.email && <span className="text-sm text-red-500">Email is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-md block font-medium text-neutral-400">
              Password
            </label>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", { required: true })}
            />
            {/* <button type="button" className="absolute right-3 top-2" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button> */}
            {errors.password && <span className="text-sm text-red-500">Password is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="text-md block font-medium text-neutral-400">
              Confirm Password
            </label>
            <Input
              type={showConfirmPassword ? "text" : "password"} // Sử dụng state showConfirmPassword để điều khiển kiểu của ô confirm password
              id="confirmPassword"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watch("password") || "Passwords do not match",
              })}
            />
            {/* <button
              type="button"
              className="absolute right-3 top-2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button> */}
            {errors.confirmPassword && (
              <span className="text-sm text-red-500">{errors.confirmPassword.message as string}</span>
            )}
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
        <div className="mt-4 flex justify-between">
          <button className="text-blue-500 hover:underline" onClick={handleRedirectToLogin}>
            Already have an account? Login
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default SignupModal
