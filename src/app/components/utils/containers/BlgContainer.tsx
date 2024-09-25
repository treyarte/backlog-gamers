import React, { ReactNode } from 'react'
type Props = {
    children:ReactNode;
    classes?:string;
}

export default function BlgContainer({children, classes}:Props) {
  return (
    <div className={`bg-container p-5 md:p-8 rounded-2xl h-fit ${classes ? classes : ''}`}>
        {children}
    </div>
  )
}
