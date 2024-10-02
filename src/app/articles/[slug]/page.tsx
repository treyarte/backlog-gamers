import { getArticleBySlug } from '@/actions/articleActions'
import BlgContainer from '@/app/components/utils/containers/BlgContainer';
import PageNoSidebarContainer from '@/app/components/utils/containers/PageNoSidebarContainer';
import { notFound, useRouter } from 'next/navigation'
import React from 'react'

export default async function FeedSlugPage ({params}: {params: {slug:string}}) {
    const res = await getArticleBySlug(params.slug);

    if(res.status === "error" || !res.data) return notFound();

    return (
        <PageNoSidebarContainer>
            <BlgContainer classes='max-w-2xl'>                
                <h1>
                    {res.data.title}
                </h1>
                <p>
                    {res.data.shortDescription}
                </p>
            </BlgContainer>
        </PageNoSidebarContainer>
    )
}
