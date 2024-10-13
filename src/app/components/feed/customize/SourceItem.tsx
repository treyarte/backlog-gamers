import React from 'react';
import Image from 'next/image';
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { Switch } from '@nextui-org/react';



export default function SourceItem() {
    return (
        <div className='flex justify-between border border-bg-border items-center p-3 rounded-2xl '>
            <div className='w-9 rounded-full h-9 bg-white'>
                <Image 
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} 
                    src="/images/websites/ign-logo-icon.png"                    
                    alt="IGN Logo"
                />
            </div>
            <div className="text-2xl">
                IGN
            </div>
            <div>
            <Switch
                defaultSelected
                size="md"
                color="success"
            >
                </Switch>
            </div>
        </div>
    )
}   
