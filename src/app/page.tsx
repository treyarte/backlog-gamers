
import { auth } from '@/auth';
import FeedSection from './components/feed/feed-section';
import Hero from './components/hero/Hero';
import PageContainer from './components/utils/containers/PageContainer';

export default async function Home() {
  
  return (
    	<>
        <Hero />
        <PageContainer>
          <FeedSection />   
        </PageContainer>
      </>
    	
  )
}
