import * as Dialog from "@radix-ui/react-dialog"
import { IoMdClose } from "react-icons/io"
import { twMerge } from "tailwind-merge"

interface ModalProps {
  isOpen: boolean
  onChange: (open: boolean) => void
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onChange, title, description, children, className }) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="
            fixed 
            inset-0 
            z-20 
            bg-neutral-900/90
            backdrop-blur-sm
          "
        />
        <Dialog.Content
          className={twMerge(
            `
            fixed 
            left-[50%] 
            top-[50%] 
            z-20 
            h-full 
            max-h-full 
            w-fit 
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
            md:max-h-[80vh] 
            md:w-[40vw]
            md:max-w-[60vw]
          `,
            className,
          )}
        >
          <Dialog.Title
            className="
              mb-4 
              text-center 
              text-xl 
              font-bold
            "
          >
            {title}
          </Dialog.Title>
          <Dialog.Description
            className="
              mb-5 
              text-center 
              text-sm 
              leading-normal
            "
          >
            {description}
          </Dialog.Description>
          <div>{children}</div>
          <Dialog.Close asChild>
            <button
              className="
                absolute 
                right-[10px] 
                top-[10px] 
                inline-flex 
                h-[25px] 
                w-[25px] 
                appearance-none 
                items-center 
                justify-center 
                rounded-full 
                text-neutral-400 
                hover:text-white 
                focus:outline-none
              "
              aria-label="Close"
            >
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
