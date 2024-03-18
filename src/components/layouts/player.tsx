"use client"

import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2"
import LibraryItem from "./library-item"
import LikeButton from "../../libs/ui/buttons/like-button"
import { BsPauseFill, BsPlayFill } from "react-icons/bs"
import { useRef, useState } from "react"
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai"
import VolumeSlider from "@/components/layouts/slider"
import MediaItem from "./library-item"
import Slider from "@/components/layouts/slider"
import { SliderType } from "@/types/song.type"
import usePlayerStore from "@/hooks/stores/use-song-store"
import { convertDuration } from "@/utils/convert-duration"

interface PlayerProps {}
const Player = () => {
  // const { song } = useGetSongById(player.activeId);

  // const songUrl = useLoadSongUrl(song!);

  // if (!song || !songUrl || !player.activeId) {
  //   return null;
  // }

  // const player = usePlayer();
  const audioRef = useRef<HTMLAudioElement>(null)
  const [duration, setDuration] = useState(0)
  const { isPlaying, setIsPlaying } = usePlayerStore()
  const [progressTime, setProgressTime] = useState(0)
  const [volume, setVolume] = useState(0)
  const Icon = isPlaying ? BsPauseFill : BsPlayFill
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave
  const handleChangeDuration = ({ x }: { x: number }) => {
    if (audioRef.current) {
      setDuration(x)

      if (!isPlaying) {
        setIsPlaying(true)
        audioRef.current.play()
      }
    }
  }
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

  const handleSetProgressTime = (x: number) => {
    if (audioRef?.current) {
      audioRef.current.currentTime = x
      setProgressTime(x)

      if (!isPlaying) {
        setIsPlaying(true)
        audioRef.current.play()
      }
    }
  }

  const handleLoadedData = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
      if (isPlaying) audioRef.current.play()
    }
  }
  const handleSetVolume = (newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume // Cập nhật âm lượng của audio
      setVolume(newVolume)
    }
  }
  const handleSetIsPlaying = () => {
    if (audioRef?.current) {
      {
        if (isPlaying) {
          audioRef.current.pause()
        } else {
          audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
      }
    }
  }
  const toggleMute = () => {
    if (volume === 0) {
      handleSetVolume(1)
    } else {
      handleSetVolume(0)
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
            onClick={handleSetIsPlaying}
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
              onClick={handleSetIsPlaying}
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
            <span className="min-w-fit">{convertDuration(progressTime)}</span>
            <Slider
              value={progressTime}
              type={SliderType.Player}
              maxValue={duration}
              onChange={handleSetProgressTime}
            />
            <audio
              ref={audioRef}
              src={
                "https://res.cloudinary.com/ddedz2fxm/video/upload/v1710581237/tunes-chain/audios/a74c1cdb-35ca-49f7-be22-56f264a27228SauLoiTuKhuocThemeSongFromMAI-PhanManhQuynh-13780092.mp3"
              }
              onLoadedData={handleLoadedData}
              onTimeUpdate={() => setProgressTime(audioRef?.current?.currentTime as number)}
              onEnded={() => setIsPlaying(false)}
            />
            <span className="min-w-fit">{duration ? convertDuration(duration) : "--:--"}</span>
          </div>
        </div>

        <div className="hidden w-full justify-end pr-2 md:flex">
          <div className="flex w-[120px] items-center gap-x-2">
            <VolumeIcon onClick={toggleMute} className="cursor-pointer" size={34} />
            <Slider value={volume} type={SliderType.Volume} onChange={(value) => handleSetVolume(value)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player
