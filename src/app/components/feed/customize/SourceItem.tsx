'use client'
import { AddExcludeSource, RemoveExcludeSource } from '@/actions/repos/userFeedSettingsRepo';
import useScrollbarStore from '@/hooks/useScrollbarStore';
import { Switch } from '@nextui-org/react';
import { ArticleSource } from '@prisma/client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { RefObject, useEffect, useRef, useState, useTransition } from 'react';

type Props = {
    containerRef:RefObject<HTMLDivElement>
    source:ArticleSource;
    isOn:boolean;
}

export default function SourceItem({containerRef, source, isOn}:Props) {
    const router = useRouter();
    const {scrollbarPos, updateScrollbarPos} = useScrollbarStore();
    const [isToggled, setIsToggled] = useState(isOn);

    useEffect(() => {
        if(containerRef.current) {
            containerRef.current.scrollTop = scrollbarPos;            
        }
    }, [containerRef, scrollbarPos])

    const handleSwitch = async (isSelected:boolean) => {
        setIsToggled(isSelected);
        if(!isSelected) { //if the switch is turned off we update the exclusion list 
            await AddExcludeSource(source.articleSite);
        } else {
            await RemoveExcludeSource(source.articleSite);
        }
        
        if(containerRef.current) {
            updateScrollbarPos(containerRef.current.scrollTop);            
            await router.refresh();        
        }

    }

    return (
        <div className='flex justify-between border border-bg-border items-center p-3 rounded-2xl '>
            <div className='w-9 rounded-full h-9 bg-white overflow-hidden'>
                <Image 
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} 
                    src={source.logoSrc ?? ""}
                    alt="New Source Logo"
                />
            </div>
            <div className="text-xl">
                {source.title}
            </div>
            <div>
            <Switch                
                defaultSelected={isToggled}
                onValueChange={handleSwitch}
                size="md"
                color="success"
            >
                </Switch>
            </div>
        </div>
    )
}   
