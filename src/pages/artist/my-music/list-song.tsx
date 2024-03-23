import React from "react"

const ListSong = () => {
  return (
    <div className="flex h-[calc(100%-92px)] w-full">
      <div className=" flex  h-full  w-[300px] flex-col gap-y-2  bg-black  px-2 pt-2">
        <div className="h-fit w-full rounded-lg bg-neutral-900">abc</div>
        <div className="w-full flex-1 rounded-lg bg-neutral-900">
          <div className="h-10"></div>
          <div className="mt-4 h-full flex-1 flex-col gap-y-1 overflow-y-auto px-3">Set scroll here</div>
        </div>
      </div>
    </div>
  )
}

export default ListSong
