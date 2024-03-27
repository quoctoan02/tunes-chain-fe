import { Button as AntButton, ButtonProps as AntButtonProps } from "antd"
import { VariantProps, cva } from "class-variance-authority"
import { MouseEvent, forwardRef, useState } from "react"

import { cn } from "@/utils/classnames"

const buttonVariants = cva(cn(""), {
  variants: {
    size: {
      small: cn("h-8 text-sm"),
      middle: cn("h-10 text-lg"),
      large: cn("h-12 text-xl"),
    },
    type: {
      primary: cn("enabled:hover:bg-primary-600 rounded-full"),
      secondary: cn(""),
      danger: cn(
        "enabled:bg-red-500 enabled:hover:bg-red-600 enabled:border-red-500 enabled:hover:!border-red-500 enabled:hover:!text-white",
      ),
      default: cn("enabled:hover:text-primary-500 enabled:hover:border-primary-500"),
      dashed: cn("enabled:hover:text-primary-500 enabled:hover:border-primary-500 "),
      text: cn(""),
      link: cn(""),
      ghost: cn("enabled:bg-transparent enabled:border-none "),
    },
  },
  defaultVariants: {
    size: "small",
    type: "default",
  },
})
export interface ButtonProps extends Omit<AntButtonProps, "type">, Omit<VariantProps<typeof buttonVariants>, "size"> {
  async?: boolean
  animateOnActive?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      children,
      type,
      async = false,
      disabled = false,
      size = "small",
      animateOnActive = true,
      className,
      ...props
    },
    ref,
  ) => {
    const [isLoading, setIsLoading] = useState(false)

    const buttonType = type ? (antButtonTypes.find((btnType) => btnType === type) as AntButtonProps["type"]) : undefined

    const handleAsyncClick = async (e: MouseEvent<HTMLButtonElement> & MouseEvent<HTMLAnchorElement>) => {
      if (!onClick) return

      setIsLoading(true)
      onClick(e)
      setIsLoading(false)
    }

    return (
      <AntButton
        onClick={async ? handleAsyncClick : onClick}
        type={buttonType}
        loading={isLoading}
        disabled={isLoading || disabled}
        {...props}
        className={cn(buttonVariants({ size, type, className }), animateOnActive && "enabled:active:scale-95")}
        ref={ref}
      >
        {children}
      </AntButton>
    )
  },
)

const antButtonTypes = ["default", "primary", "dashed", "link", "text"]

Button.displayName = "Button"
