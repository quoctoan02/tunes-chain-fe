import { FC, useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useNetwork } from "wagmi"

import { defaultChain, supportedChains } from "@/configs/chains.config"
import { useActive } from "@/hooks/wallet/use-active"
import { useChainSetup } from "@/hooks/wallet/use-chain-setup"
import { Button } from "@/libs/ui/button-demo"
import Modal from "@/libs/ui/modal"

interface RequiredChainModalProps {}

export const RequiredChainModal: FC<RequiredChainModalProps> = () => {
  const { disconnect } = useActive()
  const { chain } = useNetwork()
  const { selectChain, isSwitchingChain } = useChainSetup()

  const [isOpenModal, setIsOpenModal] = useState(false)

  const [searchParams] = useSearchParams()

  const chainId = Number(searchParams.get("chain_id"))
  const chainSelectedInParam = supportedChains.find((supportedChain) => supportedChain.id === chainId)

  const isWrongChain = useMemo(() => {
    if (!chainId || !chain) return false

    if (!chainSelectedInParam) return false

    return chainId !== chain.id
  }, [chain, chainId, chainSelectedInParam])

  const isUnsupportedChain = chain?.unsupported === true

  useEffect(() => {
    if (isWrongChain || isUnsupportedChain) {
      setIsOpenModal(true)
    } else {
      setIsOpenModal(false)
    }
  }, [isUnsupportedChain, isWrongChain])

  return (
    <>
      {isOpenModal && (
        <Modal
          className="border-cool-400 rounded-lg border"
          open={isOpenModal}
          width={400}
          title="Switch network"
          closable={false}
        >
          <div className="">
            <p className="text-warning  text-lg">You are in wrong network</p>
            <div className="my-4 flex justify-center">{/* <TbNetworkOff className="text-5xl" /> */}</div>
            <div className="flex w-full items-center justify-center gap-3">
              <Button
                className="flex-1"
                async
                loading={isSwitchingChain}
                type="primary"
                onClick={() => selectChain(chainSelectedInParam || defaultChain)}
              >
                Switch network
              </Button>
              <Button className="flex-1" disabled={isSwitchingChain} type="dashed" onClick={disconnect}>
                Disconnect
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
