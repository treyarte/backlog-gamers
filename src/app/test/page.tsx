
import { getSources } from '@/actions/articleSourceActions';
import { ArticleSource } from '@prisma/client';
import FeedSettingsButton from '../components/utils/buttons/FeedSettingsButton';
import BlgContainer from '../components/utils/containers/BlgContainer';

export default async function BtnFeedSettings() {

    let sources:ArticleSource[] = [];

    try {
        const res = await getSources();     
        if(res.status === 'success') {
            sources = res.data;
            console.info(sources);
        }
    } catch (error) {
        throw new Error("Failed to find sources");
    }
    
    return (
        <div className='flex sm:justify-center h-[90vh] sm:pl-2 sm:pr-2 pl-7 pr-7 mt-content'>
        <BlgContainer classes='w-full sm:w-auto'>
            <FeedSettingsButton sources={sources} />
        </BlgContainer>
        </div>
    )
}
