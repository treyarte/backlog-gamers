import React from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout'
import PageContainer from '../components/utils/containers/PageContainer'
import FeedSection from '../components/feed/feed-section'
import { getSources } from '@/actions/articleSourceActions';
import { ArticleSource } from '@prisma/client';
import FeedSettingsButton from '../components/utils/buttons/FeedSettingsButton';

export default async function FeedPage() {
    let sources:ArticleSource[] = [];

    try {
        const res = await getSources();     
        if(res.status === 'success') {
            sources = res.data;            
        }
    } catch (error) {
        throw new Error("Failed to find sources");
    }
    return (
    <DefaultLayout>
        <PageContainer>      
            <FeedSection 
                showLoadMore={true}
                rightSideAction={
                    <FeedSettingsButton sources={sources} />
                } 
            />
        </PageContainer>
    </DefaultLayout>
  )
}
