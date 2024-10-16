import React from 'react'
import SourceItem from './SourceItem'
import { ArticleSource } from '@prisma/client'
import { getSources } from '@/actions/articleSourceActions';

type Props = {
    sources:ArticleSource[];
}

export default function SourceSettings({sources}: Props) {

    return (
        <div className="flex flex-col gap-5 max-h-96 overflow-y-auto">
            {
                sources.map(source => (
                    <SourceItem key={source.id} source={source}/>

                ))
            }
        </div>
    )
}
