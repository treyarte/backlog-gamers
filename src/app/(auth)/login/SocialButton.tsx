import React, { ReactNode } from 'react'

type Props = {
    handleClick:() => void;
    children:ReactNode;
}

// .socialLogin :global(.btn-blg) {
//     width: 100%;
//     padding: 7px 0;
//     display: flex;
//     background-color: #fff;
//     border: 2px solid var(--default-border); 
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;
// }
export default function SocialButton({handleClick, children}:Props) {
  return (
    <button
        type="button"
        className={`btn-blg [&&]:bg-white w-full pt-1.5 pb-1.5 pl-0 pr-0 flex 
            [&&]:border-default [&&]:border-2 [&&]:border-solid justify-center`}
        onClick={handleClick} 
    >
        {children}
    </button> 
  )
}
