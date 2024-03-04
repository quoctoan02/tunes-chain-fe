"use client";

import { SliderType } from '@/types/song.type';
import * as RadixSlider from '@radix-ui/react-slider';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface SlideProps {
  value: number;
  type : SliderType;
  maxValue?: number;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SlideProps> = ({ 
  value, 
  type,
  maxValue = 1,
  onChange
}) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };

  const [isEnter, setIsEnter] = useState(false)

  return ( 
    <RadixSlider.Root
      className="
        relative 
        flex 
        items-center 
        select-none 
        touch-none 
        w-full 
        h-4
      "
      defaultValue={[type === SliderType.Player ? 0 : 1]}
      value={[value]}
      onValueChange={handleChange}
      max={type === SliderType.Player ? maxValue : 1}
      step={type === SliderType.Player ?  1 : maxValue / 100}
      aria-label="Volume"
      onMouseEnter={()=>setIsEnter(true)}
      onMouseLeave={()=>setIsEnter(false)}
    >
      <RadixSlider.Track 
        className="
          bg-neutral-600 
          relative 
          grow 
          rounded-full 
          h-[3px]
        "
      >
        <RadixSlider.Range 
          className={twMerge( 
            `absolute 
            bg-white 
            rounded-full 
            h-full
          `, isEnter && "bg-green-500")} 
        />
      </RadixSlider.Track>
       <RadixSlider.Thumb className={twMerge("w-[16px] block h-[16px] hover:cursor-pointer outline-none rounded-[10px] transition-all duration-300", isEnter && "bg-white")}/>
    </RadixSlider.Root>
  );
}
 
export default Slider;
