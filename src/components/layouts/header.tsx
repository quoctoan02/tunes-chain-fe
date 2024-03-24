import { BiChevronDown, BiSearch } from "react-icons/bi"
import { FaUserAlt } from "react-icons/fa"
import { HiHome } from "react-icons/hi"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import Button from "../../libs/ui/buttons/button"
import { useNavigate } from "react-router-dom"
import useAuthModal from "@/hooks/auth/use-auth-modal"
import SearchInput from "@/libs/ui/input/seach-input"
import useSearchInputStore from "@/hooks/stores/use-search-input-store"
import useUploadModal from "@/hooks/upload/use-upload-modal"
import { ConnectWalletWrapper } from "../wallet/connect-wallet-wrapper"
import { Dropdown } from "antd"
import { truncateAddress } from "@/utils/string"
import { useActive } from "@/hooks/wallet/use-active"

interface HeaderProps {
  children?: React.ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  // const player = usePlayer();
  const navigate = useNavigate()
  const authModal = useUploadModal()
  const { isShow: isShowSearchInput } = useSearchInputStore()
  const { disconnect, account } = useActive()
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
        {/* {user ? ( */}
        <div className="flex items-center gap-x-4">
          <Button
            // onClick={handleLogout}
            className="bg-white px-6 py-2"
          >
            Logout
          </Button>
          <Button
            // onClick={() => navigate("/account")}
            onClick={authModal.onOpen}
            className="bg-white"
          >
            <FaUserAlt />
          </Button>
        </div>
        {/* ) : ( */}
        <div>
          <div>
            <Button
              onClick={() => navigate("/signup")}
              className="
                  bg-transparent 
                  font-medium 
                  text-neutral-300
                "
            >
              Sign up
            </Button>
          </div>
          <div>
            <Button onClick={() => navigate("/login")} className="bg-white px-6 py-2">
              Log in
            </Button>
          </div>
          <ConnectWalletWrapper requiredLogin={true}>
            <Dropdown
              menu={{
                items: [
                  {
                    key: "disconnect",
                    label: <button onClick={disconnect}>Disconnect</button>,
                  },
                ],
              }}
            >
              <Button
                type="button"
                className="hover:opacity-1 flex w-36 items-center justify-between gap-1 bg-white pl-3 pr-2"
              >
                {account && truncateAddress(account, 6)}
                <BiChevronDown className="text-xl" />
              </Button>
            </Dropdown>
          </ConnectWalletWrapper>
        </div>
        {/* )} */}
      </div>
    </div>
  )
}

export default Header
