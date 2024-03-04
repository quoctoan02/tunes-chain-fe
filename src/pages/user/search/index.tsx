

import Header from "@/components/layouts/header";
import SearchInput from "@/libs/ui/input/seach-input";
import { FC } from "react";

export const revalidate = 0;

interface SearchProps {
};

const SearchPage: FC<SearchProps> = () => {
  // const songs = await getSongsByTitle(searchParams.title);

  return (
    <div 
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900">
          <SearchInput />
      </Header>
      {/* <SearchContent songs={songs} /> */}
    </div>
  );
}

export default SearchPage;
