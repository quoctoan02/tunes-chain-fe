import { Button } from "@/libs/ui/button-demo"
import { Loading } from "@/libs/ui/loading"
import { t } from "i18next"
import { HiExternalLink } from "react-icons/hi"
import { BaseError } from "viem"
import { Popper } from "./popper"
import { getTxUrl } from "./web3"

export function popPendingConfirm() {
  Popper.fire({
    title: t("Confirm"),
    customClass: {
      icon: "!border-none",
    },
    html: (
      <div className="flex flex-col items-center gap-6">
        <Loading className="text-primary" />
        <p className="text-center text-xl font-bold">{t("Waiting for confirmation")}</p>
        <p className="text-center text-sm font-semibold">{t("Confirm this transaction in your wallet")}</p>
      </div>
    ),
    showCloseButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
  })
}

export function popPending(msg: string, hash?: string) {
  Popper.fire({
    title: t("Pending"),
    customClass: {
      icon: "!border-none",
    },
    html: (
      <div className="flex flex-col items-center gap-6">
        <Loading className="text-primary" />
        {hash && <p className="text-center text-xl font-bold">{t("Transaction is processing")}</p>}
        <p className="text-center text-base font-semibold">{msg}</p>
        {hash && (
          <a
            href={getTxUrl(hash)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-info flex w-full items-center gap-2 text-center text-sm font-semibold "
          >
            <Button type="primary" className="w-full gap-1">
              <p>{t("View transaction")}</p>
              <HiExternalLink />
            </Button>
          </a>
        )}
      </div>
    ),
    showCloseButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
  })
}

export function popSuccess(msg: string, hash?: string) {
  Popper.fire({
    icon: "success",
    title: t("Success"),
    html: (
      <div className="flex flex-col items-center gap-3">
        <p className="text-center text-xl font-bold">{msg}</p>
        {hash && (
          <a
            href={getTxUrl(hash)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-info hover:text-primary-500 flex items-center gap-2 text-center text-sm font-medium hover:underline"
          >
            <p>{t("View transaction")}</p>
            <HiExternalLink />
          </a>
        )}
      </div>
    ),
    showCloseButton: false,
  })
}

export function popError(msg: string, hash?: string) {
  Popper.fire({
    icon: "error",
    title: t("Error"),
    html: (
      <div className="flex flex-col items-center gap-3">
        <p className="text-center text-xl font-bold">{msg}</p>
        {hash ? (
          <a
            href={getTxUrl(hash)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-error flex items-center gap-2 text-center text-xs font-medium hover:underline"
          >
            <p>{t("View transaction")}</p>
            <HiExternalLink />
          </a>
        ) : null}
      </div>
    ),
    showCloseButton: false,
    showConfirmButton: false,
    showDenyButton: true,
    denyButtonText: t("Try Again"),
  })
}

export function popWeb3Errors(err: BaseError, defaultMsg: string) {
  if (process.env.NODE_ENV === "development") {
    console.log("🐞 Contract call ----- ", err)
  }
  popError(err.shortMessage || err?.message || defaultMsg)
}
