"use client"

import { useEffect, useState } from "react"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { twMerge } from "tailwind-merge"

interface LikeButtonProps {
  songId?: number
  className?: string
  isHide?: boolean
  size?: number
  onClick?: (isLike: boolean) => void
}

const LikeButton: React.FC<LikeButtonProps> = ({ songId, className, isHide = true, size = 20, onClick }) => {
  // const router = useRouter();
  // const {
  //   supabaseClient
  // } = useSessionContext();
  // const loginModal = useLoginModal();
  // const { user } = useUser();

  const [isLiked, setIsLiked] = useState<boolean>(false)

  // useEffect(() => {
  //   if (!user?.id) {
  //     return;
  //   }

  //   const fetchData = async () => {
  //     const { data, error } = await supabaseClient
  //       .from('liked_songs')
  //       .select('*')
  //       .eq('user_id', user.id)
  //       .eq('song_id', songId)
  //       .single();

  //     if (!error && data) {
  //       setIsLiked(true);
  //     }
  //   }

  //   fetchData();
  // }, [songId, supabaseClient, user?.id]);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart

  const handleLike = async () => {
    // onClick(!isLiked)
    setIsLiked(!isLiked)
    //   if (!user) {
    //     return loginModal.onOpen();
    //   }

    //   if (isLiked) {
    //     const { error } = await supabaseClient
    //       .from('liked_songs')
    //       .delete()
    //       .eq('user_id', user.id)
    //       .eq('song_id', songId)

    //     if (error) {
    //       toast.error(error.message);
    //     } else {
    //       setIsLiked(false);
    //     }
    //   } else {
    //     const { error } = await supabaseClient
    //       .from('liked_songs')
    //       .insert({
    //         song_id: songId,
    //         user_id: user.id
    //       });

    //     if (error) {
    //       toast.error(error.message);
    //     } else {
    //       setIsLiked(true);
    //       toast.success('Success');
    //     }
    //   }

    //   router.refresh();
  }

  return (
    <button
      className={twMerge(
        `
        cursor-pointer 
        transition 
        hover:scale-110
      `,
        isHide && "opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
        className,
      )}
      onClick={handleLike}
    >
      <Icon color={isLiked ? "#22c55e" : "#737373"} size={size} />
    </button>
  )
}

export default LikeButton
