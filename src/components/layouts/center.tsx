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
        h-fit 
        bg-gradient-to-b 
        from-emerald-800 
        p-3
        `,
        className,
      )}
    >
      <Header />
      {children}
    </div>
  )
}

export default Center
