"use client"

import { IMediaItem } from "@/types/media.type"
import { FaPlay } from "react-icons/fa"

interface RecommendMediaItemProps {
  data: Partial<IMediaItem>
}

const RecommendMediaItem: React.FC<RecommendMediaItemProps> = ({ data }) => {
  // const onClick = () => {
  //   if (!user) {
  //     return loginModal.onOpen();
  //   }

  //   router.push(href);
  // };

  return (
    <button
      // onClick={onClick}
      className="
        group 
        relative 
        flex 
        cursor-pointer 
        items-center 
        gap-x-4 
        overflow-hidden 
        rounded-md 
        bg-neutral-100/10 
        pr-4 
        transition 
        hover:bg-neutral-100/20
      "
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <img className="absolute inset-0 h-full w-full object-cover" src={data.image} alt="Image" />
      </div>
      <p className="md:text-md py-5 font-bold lg:text-lg">{data.title}</p>
      <div
        className="
          absolute 
          right-5 
          flex 
          items-center 
          justify-center 
          rounded-full 
          bg-green-500 
          p-4 
          opacity-0 
          drop-shadow-md 
          transition
          hover:scale-110 
          group-hover:opacity-100
        "
      >
        <FaPlay className="text-black" />
      </div>
    </button>
  )
}

export default RecommendMediaItem
