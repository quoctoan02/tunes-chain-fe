import { Image as AntImage, ImageProps as AntImageProps } from "antd"
import { FC } from "react"

interface ImageProps extends AntImageProps {}

export const Image: FC<ImageProps> = ({ fallback = "https://placehold.co/100x100", ...props }) => {
  return <AntImage loading="lazy" fallback={fallback} {...props} />
}
