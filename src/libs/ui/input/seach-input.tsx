"use client"

import qs from "query-string"
import { useEffect, useState } from "react"

import Input from "./input"
import { useDebounce } from "@/hooks/render/use-debounce"
import { useNavigate } from "react-router-dom"

const SearchInput = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState<string>("")
  const debouncedValue = useDebounce<string>(value, 500)

  useEffect(() => {
    if (value) {
      const query = {
        title: debouncedValue,
      }

      const url = qs.stringifyUrl({
        url: "/search",
        query,
      })

      navigate(url)
    }
  }, [debouncedValue, navigate])

  return (
    <Input
      className="w-full min-w-[400px] max-w-[500px]"
      placeholder="What do you want to listen to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default SearchInput
