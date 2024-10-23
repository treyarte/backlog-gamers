import { ReactNode } from 'react'
import BlgContainer from '../utils/containers/BlgContainer'

type Props = {
    children:ReactNode;
}

export default function DefaultLayout({children}:Props) {
    return (
        <div className='flex sm:justify-center min-h-[90vh] pl-2 pr-2 sm:pl-7 sm:pr-7 mt-content'>            
            {children}
        </div>    
    )
}
