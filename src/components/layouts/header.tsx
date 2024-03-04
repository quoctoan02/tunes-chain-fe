import { BiSearch } from "react-icons/bi"
import { FaUserAlt } from "react-icons/fa"
import { HiHome } from "react-icons/hi"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import Button from "../../libs/ui/buttons/button"

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  className,
}) => {
  // const player = usePlayer();
  // const router = useRouter();
  // const authModal = useAuthModal();

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
    <div className="py-3 flex w-full items-center justify-between px-5">
      <div className="flex gap-x-2">
      <div className="hidden items-center gap-x-3 md:flex">
        <button
          // onClick={() => router.back()}
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
          // onClick={() => router.forward()}
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
          // onClick={() => router.push("/")}
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
          // onClick={() => router.push("/search")}
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
            // onClick={() => router.push("/account")}
            className="bg-white"
          >
            <FaUserAlt />
          </Button>
        </div>
        {/* ) : ( */}
        <>
          <div>
            <Button
              // onClick={authModal.onOpen}
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
            <Button
              // onClick={authModal.onOpen}
              className="bg-white px-6 py-2"
            >
              Log in
            </Button>
          </div>
        </>
        {/* )} */}
      </div>
    </div>
  )
}

export default Header
