import React, { useEffect, useMemo, useState } from "react"
import { Select, Spin } from "antd"
import { twMerge } from "tailwind-merge"
import { useDebounce } from "@/hooks/render/use-debounce"

interface Option {
  label: string
  value: string
}

interface InputSelectProps {
  options?: Option[]
  isLoading?: boolean
  onChange?: (value: Option | Option[]) => void
  onSearch?: (value: string) => void
  mode?: "multiple" | "tags"
  style?: React.CSSProperties
  placeholder?: string
}
const InputSelect: React.FC<InputSelectProps> = ({ options, onChange, onSearch, mode, placeholder, style }) => {
  const [isLoading, setIsLoading] = useState(false)

  const [value, setValue] = useState<string>("")
  const debouncedValue = useDebounce<string>(value, 300)

  useEffect(() => {
    setIsLoading(Boolean(!options))
    console.log("🚀 ~ useEffect ~ debouncedValue:", debouncedValue)
  }, [debouncedValue, JSON.stringify(options)])

  const handleOnChange = (value: string | string[], option: Option | Option[]) => {
    console.log(value, option)
  }

  return (
    <Select
      showSearch
      mode={"multiple"}
      onSearch={(value) => setValue(value)}
      style={style}
      className="z-30 min-w-[200px]"
      onChange={handleOnChange}
      placeholder={placeholder}
      maxLength={5}
      // optionFilterProp="children"
      // filterOption={(input, option) => (option?.label ?? "").includes(input)}
      notFoundContent={isLoading ? <Spin size="default" /> : null}
      // filterSort={(optionA, optionB) =>
      //   (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
      // }
      // className={twMerge(``, className)}
      options={[
        {
          value: "1",
          label: "Not Identified",
        },
        {
          value: "2",
          label: "Closed",
        },
        {
          value: "3",
          label: "Communicated",
        },
        {
          value: "4",
          label: "Identified",
        },
        {
          value: "5",
          label: "Resolved",
        },
        {
          value: "6",
          label: "Cancelled",
        },
      ]}
    />
  )
}

export default InputSelect
