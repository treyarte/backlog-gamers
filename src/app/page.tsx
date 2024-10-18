
import { auth } from '@/auth';
import FeedSection from './components/feed/feed-section';
import Hero from './components/hero/Hero';
import PageContainer from './components/utils/containers/PageContainer';
import Link from 'next/link';

export default async function Home() {
  
    return (
    <>
        <Hero />
        <PageContainer>
            <FeedSection 
                rightSideAction={
                    <Link className="text-lg md:text-xl underline" href="/feed">
                        View All
                    </Link>
                } 
            />
        </PageContainer>
    </>    	
  )
}
