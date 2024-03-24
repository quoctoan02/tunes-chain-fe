import { jwtDecode } from "jwt-decode"
import { FC, ReactElement, cloneElement } from "react"

import { useClientStore } from "@/hooks/stores/use-client-store"
import { useUserStore } from "@/hooks/stores/use-user-store"
import { useActive } from "@/hooks/wallet/use-active"
import { Button, ButtonProps } from "@/libs/ui/button-demo"
import { cn } from "@/utils/classnames"

interface ConnectWalletWrapperProps extends ButtonProps {
  children?: ReactElement
  className?: string
  requiredLogin?: boolean
}

export const ConnectWalletWrapper: FC<ConnectWalletWrapperProps> = ({
  children,
  className,
  requiredLogin = false,
  ...buttonProps
}) => {
  const { account, isConnecting, connectWallet } = useActive()
  const { login, token } = useUserStore()
  const { walletClient } = useClientStore()

  const cloneButtonElement =
    children &&
    cloneElement(children, {
      className: cn(className, children.props?.className),
    })

  if (!account) {
    return (
      <Button className={className} type="primary" loading={isConnecting} onClick={connectWallet} {...buttonProps}>
        Connect Wallet
      </Button>
    )
  }

  if (requiredLogin) {
    const isInvalidToken = !token || jwtDecode<{ exp: number }>(token).exp * 1000 <= Date.now()

    if (isInvalidToken) {
      return (
        <Button className={className} type="primary" async onClick={() => login(walletClient!)} {...buttonProps}>
          Sign Message
        </Button>
      )
    } else {
      return <>{cloneButtonElement}</>
    }
  }

  return <>{cloneButtonElement}</>
}
