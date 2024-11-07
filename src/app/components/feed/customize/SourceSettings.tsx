"use client";
import { articleSitesEnum } from '@/app/models/enums/articleSitesEnum';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArticleSource } from '@prisma/client';
import { useRef, useState } from 'react';
import SourceItem from './SourceItem';
import { useForm } from 'react-hook-form';
import { FeedSettingsSchema, feedSettingsSchema } from '@/app/schemas/feedSettingsSchema';
import { useRouter } from 'next/navigation';

type Props = {
    sources:ArticleSource[];
    excludedSources:articleSitesEnum[];
}

export default  function SourceSettings({sources, excludedSources}: Props) {
    const modalRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const [excludedList, setExcludedList] = useState(excludedSources);

    const updateExcludedList =  (excludedList:articleSitesEnum[]) => {
        setExcludedList(excludedList);
        router.refresh();
    }
    
    return (
        <>
            {
                sources.map((source, index) => (
                    <SourceItem 
                        containerRef={modalRef} 
                        key={source.id} 
                        source={source} 
                        isOn={!excludedSources?.some(e => e === source.articleSite)}
                        index={index}    
                    />

                ))
            }
        </>
    )
}
