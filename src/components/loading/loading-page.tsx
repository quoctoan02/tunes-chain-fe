import { logoImage } from "@/assets"
import { Image } from "@shopify/polaris"
import { FC } from "react"
import { Loading } from "."

interface LoadingPageProps {}

export const LoadingPage: FC<LoadingPageProps> = () => {
  return (
    <div className="flex min-h-[500px] w-full flex-row items-center justify-center p-4">
      <div className="">
        <Loading className=" text-primary-500" />
      </div>
      <Image source={logoImage} alt="Logo" className="max-sm:w-[100px]" />
    </div>
  )
}
