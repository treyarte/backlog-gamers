
    import { Button } from '@nextui-org/button';
    import { IoSettingsSharp } from "react-icons/io5";
import BlgContainer from '../components/utils/containers/BlgContainer';
import FeedSettingsButton from '../components/utils/buttons/FeedSettingsButton';

export default function BtnFeedSettings() {

    
    return (
        <div className='flex sm:justify-center h-[90vh] sm:pl-2 sm:pr-2 pl-7 pr-7 mt-content'>
        <BlgContainer classes='w-full sm:w-auto'>
            <FeedSettingsButton />
        </BlgContainer>
        </div>
    )
}
