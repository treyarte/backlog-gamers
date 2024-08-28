import { ReactNode } from "react"
import BlgContainer from "./BlgContainer";

type Props = {
    children:ReactNode;
}

export default function PageContainer({children}:Props) {
    return (
        <div className="px-3 md:px-12 xl:px-28 flex gap-7">
            <div className="max-w-7xl w-full flex-grow">
                {children}
            </div>
            <div className="hidden lg:flex flex-col gap-7 flex-grow min-w-80">
                <BlgContainer>
                    <div>My Ad</div>
                </BlgContainer>
                <BlgContainer>
                    <div>My Ad 2</div>
                </BlgContainer>
            </div>
        </div>
  )
}
