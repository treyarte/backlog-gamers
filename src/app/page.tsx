
import { auth } from '@/auth';
import FeedSection from './components/feed/feed-section';
import Hero from './components/hero/hero';

export default async function Home() {
  
  return (
    	<>        
        <Hero/>
        <FeedSection/>
      </>
    	
  )
}
