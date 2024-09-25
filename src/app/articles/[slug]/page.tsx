import { getArticleBySlug } from '@/actions/articleActions'
import { notFound, useRouter } from 'next/navigation'
import React from 'react'

export default async function FeedSlugPage ({params}: {params: {slug:string}}) {
    const res = await getArticleBySlug(params.slug);

    if(res.status === "error" || !res.data) return notFound();

    return (
        <div>
            {
                res.data?.title
            }
        </div>
    )
}
