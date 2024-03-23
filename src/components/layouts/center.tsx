"use client"

import { twMerge } from "tailwind-merge"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { FaUserAlt } from "react-icons/fa"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Header from "./header"

interface CenterProps {
  children: React.ReactNode
  className?: string
}

const Center: React.FC<CenterProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `
         h-full overflow-hidden overflow-y-auto rounded-lg bg-gradient-to-b from-neutral-900
        `,
        className,
      )}
    >
      <Header />
      <div className="px-6  py-3">{children}</div>
    </div>
  )
}

export default Center
