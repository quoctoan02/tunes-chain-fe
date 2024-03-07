"use client"

import { SliderType } from "@/types/song.type"
import * as RadixSlider from "@radix-ui/react-slider"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

interface SlideProps {
  value: number
  type: SliderType
  maxValue?: number
  onChange?: (value: number) => void
}

const Slider: React.FC<SlideProps> = ({ value, type, maxValue = 1, onChange }) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0])
  }

  const [isEnter, setIsEnter] = useState(false)

  return (
    <RadixSlider.Root
      className="
        relative 
        flex 
        h-4 
        w-full 
        touch-none 
        select-none 
        items-center
      "
      defaultValue={[type === SliderType.Player ? 0 : 1]}
      value={[value]}
      onValueChange={handleChange}
      max={type === SliderType.Player ? maxValue : 1}
      step={type === SliderType.Player ? 1 : maxValue / 100}
      aria-label="Volume"
      onMouseEnter={() => setIsEnter(true)}
      onMouseLeave={() => setIsEnter(false)}
    >
      <RadixSlider.Track
        className="
          relative 
          h-[3px] 
          grow 
          rounded-full 
          bg-neutral-600
        "
      >
        <RadixSlider.Range
          className={twMerge(
            `absolute 
            h-full 
            rounded-full 
            bg-white
          `,
            isEnter && "bg-green-500",
          )}
        />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className={twMerge(
          "block h-[16px] w-[16px] rounded-[10px] outline-none transition-all duration-300 hover:cursor-pointer",
          isEnter && "bg-white",
        )}
      />
    </RadixSlider.Root>
  )
}

export default Slider
