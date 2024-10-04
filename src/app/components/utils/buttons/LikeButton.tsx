'use client';

import { toggleLikeArticle } from "@/actions/repos/likesRepo";
import { useRouter } from "next/navigation";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";


type Props = {
    articleId:string;
    hasLiked:boolean;
}

export default function LikeButton({articleId, hasLiked}:Props) {
    const router = useRouter();

    async function toggleLike() {
        await toggleLikeArticle(articleId, hasLiked);
        router.refresh();
    }

    return (
        <div onClick={toggleLike} className='relative hover:opacity-80 transition cursor-pointer'>
            <AiOutlineHeart size={28} className='fill-white absolute -top-[2px] -right-[2px]' />
            <AiFillHeart size={24} className={hasLiked ? 'fill-rose-500' : 'fill-neutral-500/70'}/>
        </div>
    )
}