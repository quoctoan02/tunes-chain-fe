import React, { useMemo, useRef, useState } from "react"
import { Select, Spin } from "antd"
import type { SelectProps } from "antd"
import debounce from "lodash/debounce"
import { twMerge } from "tailwind-merge"

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, "options" | "children"> {
  fetchOptions: (search: string) => Promise<ValueType[]>
  debounceTimeout?: number
}

function DebounceSelect<ValueType extends { key?: string; label: React.ReactNode; value: string | number } = any>({
  fetchOptions,
  debounceTimeout = 800,
  ...props
}: DebounceSelectProps<ValueType>) {
  const [fetching, setFetching] = useState(false)
  const [options, setOptions] = useState<ValueType[]>([])
  const fetchRef = useRef(0)

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1
      const fetchId = fetchRef.current
      setOptions([])
      setFetching(true)

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return
        }

        setOptions(newOptions)
        setFetching(false)
      })
    }

    return debounce(loadOptions, debounceTimeout)
  }, [fetchOptions, debounceTimeout])

  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      options={options}
      //   className={twMerge(props.className, `border-none bg-neutral-800 text-black outline-none hover:text-white`)}
      {...props}
    />
  )
}

// Usage of DebounceSelect
interface UserValue {
  label: string
  value: string
}

async function fetchUserList(username: string): Promise<UserValue[]> {
  console.log("fetching user", username)

  return fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((body) =>
      body.results.map((user: { name: { first: string; last: string }; login: { username: string } }) => ({
        label: `${user.name.first} ${user.name.last}`,
        value: user.login.username,
      })),
    )
}

const SearchSelect: React.FC = () => {
  const [value, setValue] = useState<UserValue[]>([])

  return (
    <DebounceSelect
      mode="multiple"
      value={value}
      placeholder="Select album"
      fetchOptions={fetchUserList}
      onChange={(newValue) => {
        setValue(newValue as UserValue[])
      }}
      style={{ width: "100%" }}
      // className="bg-white"
      //   className="bg-neutral-800 outline-none"
    />
  )
}

export default SearchSelect
