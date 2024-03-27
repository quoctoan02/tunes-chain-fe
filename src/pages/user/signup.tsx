import React from "react"
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import Input from "@/libs/ui/input/input"
import Button from "@/libs/ui/buttons/button"
import { useNavigate } from "react-router-dom"
import { Service } from "@/services/app.service"
import { toast } from "react-toastify"

const SignupPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const onSubmit = async (data: any) => {
    console.log("🚀 ~ onSubmit ~ data:", data)
    // Xử lý đăng ký ở đây

    // await Service.auth.signup(data.email, data.password, data.name)
    // toast.success("Sign up account successfully")
    // navigate("/login")
  }

  return (
    <div
      className="fixed 
            left-[50%] 
            top-[50%] 
            h-full 
            max-h-full 
            w-full 
            translate-x-[-50%] 
            translate-y-[-50%] 
            rounded-md 
            border 
            border-neutral-700 
            bg-neutral-800 
            p-[25px] 
            drop-shadow-md 
            focus:outline-none 
            md:h-auto 
            md:max-h-[85vh] 
            md:w-[90vw] 
            md:max-w-[600px]"
    >
      <div className="rounded-lg p-8 shadow-md">
        <h2 className="mb-6 text-center text-3xl font-semibold">Sign Up for Spotify</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="text-md block font-medium text-neutral-400">
              Display Name
            </label>
            <Input
              id="name"
              {...register("name", { required: true })}
              // className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <span className="text-sm text-red-500">Display name is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-md block font-medium text-neutral-400">
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              {...register("email", { required: true })}
              // className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              //  className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <span className="text-sm text-red-500">Password is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="text-md block font-medium text-neutral-400">
              Confirm Password
            </label>
            <Input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watch("password") || "Passwords do not match",
              })}
              // className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && (
              <span className="text-sm text-red-500">{errors.confirmPassword.message as string}</span>
            )}
          </div>
          <Button
            type="submit"
            //className="w-full rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            Sign Up
          </Button>
        </form>
        {/* <div className="mt-4 flex items-center justify-between">
          <div className="w-full border-b border-gray-400"></div>
          <span className="text-gray-500">or</span>
          <div className="w-full border-b border-gray-400"></div>
        </div>
        <div className="mt-4 flex items-center justify-center space-x-4">
          <button className="flex items-center rounded-md bg-blue-700 px-4 py-2 text-white">
            <FcGoogle className="mr-2" />
            Sign Up with Google
          </button>
          <button className="flex items-center rounded-md bg-blue-900 px-4 py-2 text-white">
            <FaFacebook className="mr-2" />
            Sign Up with Facebook
          </button>
        </div> */}
        <div className="mt-4 flex justify-between">
          <button className="text-blue-500 hover:underline" onClick={() => navigate("/login")}>
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
