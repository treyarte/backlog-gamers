
import { auth } from '@/auth';
import FeedSection from './components/feed/feed-section';
import Hero from './components/hero/hero';

export default async function Home() {
  const session = await auth()
  return (
    	<>
        <pre>{JSON.stringify(session,null, 2)}</pre>
        <Hero/>
        <FeedSection/>
      </>
    	
  )
}
