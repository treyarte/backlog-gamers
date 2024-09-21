import React from 'react'
import Image from "next/image";
export default function FormLogo() {
    return (
        <div className="flex items-center justify-center mb-4">
        <div className="w-11 xl:w-16">
            <Image
                width={0}
                height={0}
                className="w-11 xl:w-16"
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
                src='/images/logos/bg-logo-invert.png'
                alt='logo'
            />
        </div>                
    </div>
    )
}
