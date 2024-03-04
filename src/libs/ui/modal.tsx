import { cn } from "@/utils/classnames"
import { Modal as AntModal, ModalProps as AntModalProps } from "antd"
import { FC } from "react"

interface ModalProps extends AntModalProps {}

const Modal: FC<ModalProps> = ({ children, ...props }) => {
  return (
    <AntModal footer={false} destroyOnClose {...props} className={cn("pb-0", props.className)}>
      {children}
    </AntModal>
  )
}

export default Modal
