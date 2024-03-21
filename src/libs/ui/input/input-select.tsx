import React from "react"
import { Select } from "antd"
import { twMerge } from "tailwind-merge"

interface InputSelectProps {
  className?: string
}
const InputSelect: React.FC<InputSelectProps> = ({ className }) => (
  <Select
    showSearch
    style={{}}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? "").includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
    }
    className={twMerge(``, className)}
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

export default InputSelect
