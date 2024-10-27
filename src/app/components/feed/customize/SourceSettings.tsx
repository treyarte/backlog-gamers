import React from 'react'
import SourceItem from './SourceItem'
import { ArticleSource } from '@prisma/client'
import { getSources } from '@/actions/articleSourceActions';
import { auth } from '@/auth';
import { articleSitesEnum } from '@/app/models/enums/articleSitesEnum';

type Props = {
    sources:ArticleSource[];
    excludedSources:articleSitesEnum[];
}

export default  function SourceSettings({sources, excludedSources}: Props) {
    return (
        <div className="flex flex-col gap-5 max-h-96 overflow-y-auto">
            {
                sources.map(source => (
                    <SourceItem key={source.id} source={source} isOn={!excludedSources?.some(e => e === source.articleSite)}/>

                ))
            }
        </div>
    )
}
