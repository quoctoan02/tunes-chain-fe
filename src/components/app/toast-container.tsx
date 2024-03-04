import { cn } from "@/utils/classnames"
import { FC } from "react"
import { ToastContainer as ReactToastifyContainer } from "react-toastify"
// import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

interface ToastContainerProps {}

export const ToastContainer: FC<ToastContainerProps> = () => {
  const contextClass = {
    success: cn("!bg-success-500"),
    error: cn("!bg-red-500"),
    info: cn("!bg-info-500"),
    warning: cn("!bg-warning-500"),
    default: cn(""),
    dark: cn(""),
    light: cn(""),
  }

  return (
    <>
      <ReactToastifyContainer
        closeButton
        draggable
        position="top-right"
        theme="colored"
        pauseOnHover
        hideProgressBar
        autoClose={3500}
        bodyClassName={"font-sans"}
        toastClassName={(context) => {
          const classes = cn(context?.defaultClassName, contextClass[context?.type || "default"])
          return classes
        }}
        // Change transition toastify
        // transition={Slide}
        // transition={Zoom}
        // transition={Flip}
        // transition={Bounce}
      />
    </>
  )
}
