import { useEffect, useState } from "react"

const DEBOUNCE_DELAY_TIMER = 500

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || DEBOUNCE_DELAY_TIMER)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
