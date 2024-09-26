import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

export default function PageNoSidebarContainer({children}:Props) {
    return (
        <div className='flex sm:justify-center h-[90vh] sm:pl-2 sm:pr-2 pl-7 pr-7 mt-content'>
            {children}
        </div>
    )
}
