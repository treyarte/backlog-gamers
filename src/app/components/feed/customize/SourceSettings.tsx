"use client";
import { articleSitesEnum } from '@/app/models/enums/articleSitesEnum';
import { ArticleSource } from '@prisma/client';
import { useRef } from 'react';
import SourceItem from './SourceItem';

type Props = {
    sources:ArticleSource[];
    excludedSources:articleSitesEnum[];
}

export default  function SourceSettings({sources, excludedSources}: Props) {
    const modalRef = useRef<HTMLDivElement>(null);
    
    return (
        <div ref={modalRef} className="flex flex-col gap-5 max-h-96 overflow-y-auto">
            {
                sources.map(source => (
                    <SourceItem containerRef={modalRef} key={source.id} source={source} isOn={!excludedSources?.some(e => e === source.articleSite)}/>

                ))
            }
        </div>
    )
}
