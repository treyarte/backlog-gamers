import React, { ReactNode } from 'react'
type Props = {
    children:ReactNode;
}

export default function BlgContainer({children}:Props) {
  return (
    <div className='bg-container p-8 rounded-2xl'>
        {children}
    </div>
  )
}
