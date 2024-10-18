import { ReactNode } from 'react'
import BlgContainer from '../utils/containers/BlgContainer'

type Props = {
    children:ReactNode;
}

export default function DefaultLayout({children}:Props) {
    return (
        <div className='flex sm:justify-center min-h-[90vh] sm:pl-2 sm:pr-2 pl-7 pr-7 mt-content'>            
            {children}
        </div>    
    )
}
