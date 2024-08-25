
import { auth } from '@/auth';
import FeedSection from './components/feed/feed-section';
import Hero from './components/hero/hero';
import NewHero from './components/hero/NewHero';

export default async function Home() {
  
  return (
    	<>
        <NewHero />        
        {/* <Hero/>
        <FeedSection/> */}
      </>
    	
  )
}
