
import { auth } from '@/auth';
import FeedSection from './components/feed/feed-section';
import Hero from './components/hero/hero';
import NewHero from './components/hero/NewHero';
import PageContainer from './components/utils/containers/PageContainer';

export default async function Home() {
  
  return (
    	<>
        <NewHero />
        <PageContainer>
          <FeedSection />   
        </PageContainer>
        {/* <Hero/>
        <FeedSection/> */}
      </>
    	
  )
}
