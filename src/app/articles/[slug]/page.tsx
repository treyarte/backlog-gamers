import { getArticleBySlug } from '@/actions/articleActions';
import BlgContainer from '@/app/components/utils/containers/BlgContainer';
import PageNoSidebarContainer from '@/app/components/utils/containers/PageNoSidebarContainer';
import { notFound } from 'next/navigation';

type Params = Promise<{slug:string}>

type Props = {
    ss:string;
}

export default async function ArticlePage({
    params,
}: {params: Promise<{slug:string}>}) {
    const {slug} = await params;
    const res = await getArticleBySlug(slug);

    if(res.status === "error" || !res.data) return notFound();

    return (
        <PageNoSidebarContainer>
            <BlgContainer classes='max-w-2xl'>           
                <div></div>     
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
