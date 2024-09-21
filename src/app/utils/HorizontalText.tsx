import React from 'react'

type Props = {
    text:string;
}

export default function HorizontalText({text}:Props) {
    return (
        <div className='inline-flex items-center justify-center w-full'>
            <hr className="w-64 h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
            <span className="absolute px-3 font-medium  -translate-x-1/2 bg-container left-1/2 text-white dark:bg-gray-900">{text}</span>
        </div>
  )
}
