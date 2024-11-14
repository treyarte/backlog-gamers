import React from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout'
import PageContainer from '../components/utils/containers/PageContainer'
import FeedSection from '../components/feed/feed-section'
import { getSources } from '@/actions/articleSourceActions';
import { ArticleSource, UserFeedSettings } from '@prisma/client';
import FeedSettingsButton from '../components/utils/buttons/FeedSettingsButton';
import { getUserExcludedSources } from '@/actions/repos/userFeedSettingsRepo';
import { auth } from '@/auth';
import { articleSitesEnum } from '../models/enums/articleSitesEnum';

export default async function FeedPage() {
    const session = await auth();
    let sources:ArticleSource[] = [];
    let excludedList:articleSitesEnum[] = [];

    try {
        const res = await getSources();
        excludedList = await getUserExcludedSources(session?.user.id ?? ""); //todo use an action instead
        
        if(res.status === 'success') {
            sources = res.data;            
        }
    } catch (error) {
        console.error(error);
        throw new Error("Failed to find sources");
    }
    return (
    <DefaultLayout>
        <PageContainer>      
            <FeedSection
                excludedSources={excludedList}
                showLoadMore={true}
                rightSideAction={
                    <FeedSettingsButton sources={sources} excludedSources={excludedList} />
                } 
            />
        </PageContainer>
    </DefaultLayout>
  )
}
