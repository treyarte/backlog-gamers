import { Switch } from '@nextui-org/react';
import { ArticleSource } from '@prisma/client';
import Image from 'next/image';

type Props = {
    source:ArticleSource;
}

export default function SourceItem({source}:Props) {
    return (
        <div className='flex justify-between border border-bg-border items-center p-3 rounded-2xl '>
            <div className='w-9 rounded-full h-9 bg-white'>
                <Image 
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} 
                    src={source.logoSrc ?? ""}
                    alt="New Source Logo"
                />
            </div>
            <div className="text-2xl">
                {source.title}
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
