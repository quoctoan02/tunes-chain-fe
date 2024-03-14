"use client"

import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2"
import LibraryItem from "./library-item"
import LikeButton from "../../libs/ui/buttons/like-button"
import { BsPauseFill, BsPlayFill } from "react-icons/bs"
import { useState } from "react"
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai"
import VolumeSlider from "@/components/layouts/slider"
import MediaItem from "./library-item"
import Slider from "@/components/layouts/slider"
import { SliderType } from "@/types/song.type"
import usePlayerStore from "@/hooks/stores/use-song-store"

const Player = () => {
  // const { song } = useGetSongById(player.activeId);

  // const songUrl = useLoadSongUrl(song!);

  // if (!song || !songUrl || !player.activeId) {
  //   return null;
  // }

  // const player = usePlayer();
  const { volume, changeVolume, changeProgressTime, progressTime, isPlaying, toggleIsPlaying } = usePlayerStore()
  console.log("🚀 ~ Player ~ isPlaying:", isPlaying)
  console.log("🚀 ~ Player ~ volume:", volume, progressTime)
  // const [isPlaying, setIsPlaying] = useState(false)

  const Icon = isPlaying ? BsPauseFill : BsPlayFill
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave

  // const onPlayNext = () => {
  //   if (player.ids.length === 0) {
  //     return;
  //   }

  //   const currentIndex = player.ids.findIndex((id) => id === player.activeId);
  //   const nextSong = player.ids[currentIndex + 1];

  //   if (!nextSong) {
  //     return player.setId(player.ids[0]);
  //   }

  //   player.setId(nextSong);
  // }

  // const onPlayPrevious = () => {
  //   if (player.ids.length === 0) {
  //     return;
  //   }

  //   const currentIndex = player.ids.findIndex((id) => id === player.activeId);
  //   const previousSong = player.ids[currentIndex - 1];

  //   if (!previousSong) {
  //     return player.setId(player.ids[player.ids.length - 1]);
  //   }

  //   player.setId(previousSong);
  // }

  // const [play, { pause, sound }] = useSound(
  //   songUrl,
  //   {
  //     volume: volume,
  //     onplay: () => setIsPlaying(true),
  //     onend: () => {
  //       setIsPlaying(false);
  //       onPlayNext();
  //     },
  //     onpause: () => setIsPlaying(false),
  //     format: ['mp3']
  //   }
  // );

  // useEffect(() => {
  //   sound?.play();

  //   return () => {
  //     sound?.unload();
  //   }
  // }, [sound]);

  const toggleMute = () => {
    if (volume === 0) {
      changeVolume(1)
    } else {
      changeVolume(0)
    }
  }
  const song = {
    id: 1,
    artist: "Phan manh quynh",
    title: "Sau loi tu khuoc",
  }
  return (
    <div
      className="
        fixed 
        bottom-0 
        w-full 
        bg-black 
        px-4  
        py-3
      "
    >
      <div className="grid h-full grid-cols-2 md:grid-cols-3">
        <div className="flex w-full justify-start">
          <div className="flex items-center gap-x-4">
            <MediaItem data={song} />
            <LikeButton songId={song.id} />
          </div>
        </div>

        <div
          className="
            col-auto 
            flex 
            w-full 
            items-center 
            justify-end 
            md:hidden
          "
        >
          <div
            // onClick={handlePlay}
            className="
              flex
              h-10
              w-10 
              cursor-pointer 
              items-center 
              justify-center 
              rounded-full 
              bg-white
              p-1
            "
          >
            <Icon size={24} className="text-black" />
          </div>
        </div>

        <div className="flex flex-col">
          <div
            className="hidden
          
            w-full 
            items-center 
            justify-center 
            gap-x-6 
            md:flex"
          >
            <AiFillStepBackward
              //   onClick={onPlayPrevious}
              size={24}
              className="
              cursor-pointer 
              text-neutral-400 
              transition 
              hover:text-white
            "
            />
            <div
              onClick={toggleIsPlaying}
              className="
              flex 
              h-10 
              w-10
              cursor-pointer
              items-center 
              justify-center 
              rounded-full 
              bg-white 
              p-1
            "
            >
              <Icon size={24} className="text-black" />
            </div>
            <AiFillStepForward
              //    onClick={onPlayNext}
              size={24}
              className="
              cursor-pointer 
              text-neutral-400 
              transition 
              hover:text-white
            "
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>0:00</span>
            <Slider
              value={progressTime}
              type={SliderType.Player}
              maxValue={300}
              onChange={(value) => changeProgressTime(value)}
            />
            <span>5:00</span>
          </div>
        </div>

        <div className="hidden w-full justify-end pr-2 md:flex">
          <div className="flex w-[120px] items-center gap-x-2">
            <VolumeIcon onClick={toggleMute} className="cursor-pointer" size={34} />
            <Slider value={volume} type={SliderType.Volume} onChange={(value) => changeVolume(value)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player
