import Header from "@/components/layouts/header"
import { useShowSearchInput } from "@/hooks/render/use-show-search-input"
import useSearchInputStore from "@/hooks/render/use-search-input-store"
import SearchInput from "@/libs/ui/input/seach-input"
import { FC, useEffect } from "react"

export const revalidate = 0

interface SearchProps {}

const SearchPage: FC<SearchProps> = () => {
  // const songs = await getSongsByTitle(searchParams.title);

  const { onShow, onHide, isShow } = useSearchInputStore()
  useShowSearchInput()
  // useEffect(() => {
  //   if (!isShow) {
  //     onShow()
  //   }

  //   return () => {
  //     if (isShow)
  //       onHide()
  //   }
  // }, [isShow])

  return (
    <div
      className="
      "
    >
      {/* <SearchContent songs={songs} /> */}
    </div>
  )
}

export default SearchPage
