
import { ErrorBoundary } from 'react-error-boundary';
import FeedList from './components/feed/feed-list';
import Hero from './components/hero/hero';
import styles from "./page.module.css";
import DefaultError from './components/errors/defaultError';
import FeedSection from './components/feed/feed-section';

export default function Home() {
  return (
    	<>
        <Hero/>
        <FeedSection/>
      </>
    	
  )
}
