import { BiChevronDown, BiSearch } from "react-icons/bi"
import { FaUserAlt } from "react-icons/fa"
import { HiHome } from "react-icons/hi"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import Button from "../../libs/ui/buttons/button"
import { useNavigate } from "react-router-dom"
import SearchInput from "@/libs/ui/input/seach-input"
import useSearchInputStore from "@/hooks/render/use-search-input-store"
import useUploadModal from "@/hooks/render/use-upload-modal"
import { ConnectWalletWrapper } from "../wallet/connect-wallet-wrapper"
import { Dropdown } from "antd"
import { truncateAddress } from "@/utils/string"
import { useActive } from "@/hooks/wallet/use-active"
import { Role } from "@/types/auth.type"
import LoginEmailWrapper from "../auth/login-email-wrapper"

interface HeaderProps {
  children?: React.ReactNode
  className?: string
  role?: Role
}

const Header: React.FC<HeaderProps> = ({ children, className, role = Role.User }) => {
  // const player = usePlayer();
  const navigate = useNavigate()
  const authModal = useUploadModal()
  const { isShow: isShowSearchInput } = useSearchInputStore()

  // const supabaseClient = useSupabaseClient();
  // const { user } = useUser();

  // const handleLogout = async () => {
  //   const { error } = await supabaseClient.auth.signOut();
  //   player.reset();
  //   router.refresh();

  //   if (error) {
  //     toast.error(error.message);
  //   }
  // }
  return (
    <div className="sticky top-0 z-10 flex min-h-[58px] w-full items-center justify-between gap-x-4 bg-neutral-900 px-6  py-3">
      <div className="flex gap-x-4">
        <div className="hidden items-center gap-x-3 md:flex">
          <button
            onClick={() => navigate(-1)}
            className="
            flex 
            cursor-pointer 
            items-center 
            justify-center 
            rounded-full 
            bg-black 
            transition 
            hover:opacity-75
          "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="
            flex 
            cursor-pointer 
            items-center 
            justify-center 
            rounded-full 
            bg-black 
            transition 
            hover:opacity-75
          "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex items-center gap-x-2 md:hidden">
          <button
            onClick={() => navigate("/")}
            className="
            flex 
            cursor-pointer 
            items-center 
            justify-center 
            rounded-full 
            bg-white 
            p-2 
            transition 
            hover:opacity-75
          "
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            onClick={() => navigate("/search")}
            className="
            flex 
            cursor-pointer 
            items-center 
            justify-center 
            rounded-full 
            bg-white 
            p-2 
            transition 
            hover:opacity-75
          "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        {isShowSearchInput && <SearchInput />}
        {children}
      </div>

      <div className="flex items-center justify-between gap-x-4">
        {role === Role.User && <ConnectWalletWrapper requiredLogin size="middle" />}
        {role === Role.Artist && <LoginEmailWrapper />}
      </div>
    </div>
  )
}

export default Header
