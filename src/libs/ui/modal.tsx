import { cn } from "@/utils/classnames"
import { Modal as AntModal, ModalProps as AntModalProps } from "antd"
import { FC } from "react"

interface ModalProps extends AntModalProps {}

const Modal: FC<ModalProps> = ({ children, ...props }) => {
  return (
    <AntModal footer={false} {...props} className={cn("transition", props.className)} centered>
      {children}
    </AntModal>
  )
}

export default Modal
