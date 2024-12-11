'use client';

import { toggleLikeArticle } from "@/actions/repos/likesRepo";
import LoginForm from "@/app/(auth)/login/LoginForm";
import { getRandomNumber } from "@/app/utils/mathHelpers";
import { Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { useAnimate, AnimationSequence, stagger } from "framer-motion";
import { useRouter } from "next/navigation";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { toast } from "react-toastify";
import BlgContainer from "../containers/BlgContainer";
import FormLogo from "../containers/FormLogo";
import { useSession } from "next-auth/react";


type Props = {
    articleId:string;
    hasLiked:boolean;
}

const sparklesAmount = 5;

export default function LikeButton({articleId, hasLiked}:Props) {
    const router = useRouter();

    const [scope, animate] = useAnimate();

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const {status} = useSession();

    const handleClick = async () => {
        const sparkles = Array.from({length:sparklesAmount});
        const sparkleAnimations:AnimationSequence = sparkles.map((_, index) => [
            `.sparkle-${index}`, 
            {
                x: getRandomNumber(-50, 50),
                y: getRandomNumber(-50, 50),
                scale: getRandomNumber(1.5, 1.7),
                opacity: 1
            },
            {
                duration: 0.4,
                at: "<"
            }
        ]);

        const sparkleFadeOut:AnimationSequence = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            {
                opacity: 0,
                scale: 0,
            },
            {
                duration: 0.3,
                at: "<"
            }
        ])

        const sparklesReset:AnimationSequence = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            {
                x: 0,
                y: 0,
            },
            {
                duration: 0.000001,                
            }
        ]);
        try {
            
            if(status === "unauthenticated") {
                // onOpen();
                toast.info("Please login to like an article");
                return;
            }

            if(hasLiked) {
                await toggleLike();
                return;
            }

            animate([
                ...sparklesReset,    
                [".letter", {y: -32}, {duration: 0.2, delay: stagger(0.05)}],        
                ["button", {scale: 0.8}, {duration: 0.1, at: "<"}], //Runs at the same time
                ["button", {scale: 1}, {duration: 0.1}],
                ...sparkleAnimations,       
                [".letter", {y: 0}, {duration: 0.000001}],     
                ...sparkleFadeOut
            ]);
            await toggleLike();
        } catch (error) {
            //Pop open login modal
            //@ts-ignore
            if(error?.message === "Unauthorized") {
                
                toast.info("Please login to like an article");
            }
        }
    }

    async function toggleLike() {
        try {
            await toggleLikeArticle(articleId, hasLiked);
            router.refresh();            
            
        } catch (error) {
            throw error;
        }     
    }

    return (
        <div ref={scope}>
        <button onClick={handleClick} className='relative hover:opacity-80 transition cursor-pointer'>
            <AiOutlineHeart size={28} className='fill-white absolute -top-[2px] -right-[2px]' />
            <AiFillHeart size={24} className={hasLiked ? 'fill-rose-500' : 'fill-neutral-500/70'}/>
            <span aria-hidden className="block absolute inset-0 z-10 pointer-events-none">
                {Array.from({length: sparklesAmount}).map((_, index) => (
                    <AiFillHeart key={index} size={10} className={`fill-rose-500 absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`} />
                ))}
            </span>
        </button>
        {/* <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="center"
            >
                <ModalContent>
                    <ModalBody>
                    <BlgContainer classes=''>
                <FormLogo />
                <div className='flex flex-row gap-2 justify-center mb-4'>            
                    <FiLogIn size={38} />
                    <h1 className='font-bold text-4xl'>Login</h1>
                </div>
                <LoginForm />
            </BlgContainer>
            </ModalBody>
                </ModalContent>
        </Modal> */}
        </div>
    )
}