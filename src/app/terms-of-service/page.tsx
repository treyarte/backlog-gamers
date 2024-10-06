import { Metadata } from "next"
import BlgContainer from "../components/utils/containers/BlgContainer"
import { stagger, useAnimate } from "framer-motion"
import AnimatedBtn from "../components/utils/buttons/animated/examples/AnimatedBtn"
import LikeButton from "../components/utils/buttons/LikeButton"

export const metadata:Metadata = {
    title: "Terms Of Service",
    description: "HELLO"
}

export default function Tos() {


    return (
        <div className='flex sm:justify-center h-[90vh] sm:pl-2 sm:pr-2 pl-7 pr-7 mt-content'>
        <BlgContainer classes='w-full sm:w-auto'>
            {/* <AnimatedBtn/> */}
            <LikeButton articleId={"66e25a0ee27848078ddb4452"} hasLiked={false} />
        </BlgContainer>
    </div>
    )
}