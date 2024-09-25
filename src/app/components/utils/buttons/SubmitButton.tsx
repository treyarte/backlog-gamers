import { Button } from '@nextui-org/react'
import React from 'react'

type Props = {
    text:string;
    isDisabled:boolean;
}

export default function SubmitButton({text, isDisabled}:Props) {
    return (
        <Button
            isDisabled={isDisabled}
            className={`w-full py-2 [&&]:bg-[#8e5bdb] [&&]:hover:bg-opacity-90 text-white text-xl
                [&&]:disabled:bg-opacity-70 disabled:cursor-not-allowed`}
        >
            {text}
        </Button>
    )
}
