"use client"

import { useEffect, useState } from "react"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"
import { twMerge } from "tailwind-merge"

interface MoreButtonProps {
  onClick?: () => {}
  className?: string
  isHide?: boolean
  size?: number
}

const MoreButton: React.FC<MoreButtonProps> = ({ onClick, className, isHide = true, size = 20 }) => {
  return (
    <button
      className={twMerge(
        `
        cursor-pointer 
        transition 
        hover:scale-110
      `,
        isHide && "opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
        className,
      )}
      onClick={onClick}
    >
      <BsThreeDots color={"#737373"} size={size} />
    </button>
  )
}

export default MoreButton
