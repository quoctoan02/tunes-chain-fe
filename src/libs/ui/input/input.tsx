import { forwardRef } from "react";
import { twMerge } from "tailwind-merge"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  disabled,
  ...props
}, ref) => {
  return (
    <input
      type={type}
      className={twMerge(
        `
        flex 
        w-full 
        rounded-full
        border
        border-transparent
        bg-neutral-800
        px-3 
        py-3 
        text-sm 
        text-white
        file:border-0 
        file:bg-transparent 
        file:text-sm 
        file:font-medium 
        placeholder:text-neutral-400 
        focus:outline-none 
        disabled:cursor-not-allowed
        disabled:opacity-50
      `,
        disabled && "opacity-75",
        className,
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  )
});

Input.displayName = "Input";

export default Input