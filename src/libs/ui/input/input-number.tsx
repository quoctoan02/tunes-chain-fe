import { InputRef } from "antd"
import { ChangeEvent, forwardRef } from "react"

import { Input, InputProps } from "."

const regexNumber = /^([0-9]+([.][0-9]*)?|[.][0-9]+)$/g
export interface InputNumberProps extends Omit<InputProps, "type" | "onChange"> {
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void
  maxDecimal?: number
  max?: number
}

export const InputNumber = forwardRef<InputRef, InputNumberProps>(
  ({ maxDecimal = 18, max, onChange, ...props }, ref) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (!onChange) return

      const value = e.target.value

      const transformValue = value.replace(/,/g, ".").replaceAll(" ", "")

      const valueSplit = transformValue.split(".")

      const decimalStr = valueSplit?.[1] || ""

      let validNumber =
        !isNaN(Number(transformValue)) &&
        decimalStr.length <= maxDecimal &&
        valueSplit?.length <= 2 &&
        transformValue !== "00"

      if (max) {
        validNumber = validNumber && Number(transformValue) <= max
      }

      if (!transformValue) {
        onChange("", e)
      } else if (validNumber) {
        onChange(transformValue, e)
      }
    }
    return <Input ref={ref} {...props} type="text" onChange={handleChange} />
  },
)
InputNumber.displayName = "InputNumber"
