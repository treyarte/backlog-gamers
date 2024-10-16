
    import { Button } from '@nextui-org/button';
    import { IoSettingsSharp } from "react-icons/io5";
import BlgContainer from '../components/utils/containers/BlgContainer';
import FeedSettingsButton from '../components/utils/buttons/FeedSettingsButton';
import { ArticleSource } from '@prisma/client';
import { getSources } from '@/actions/articleSourceActions';

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
