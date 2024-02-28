
import { ErrorBoundary } from 'react-error-boundary';
import FeedList from './components/feed/feed-list';
import Hero from './components/hero/hero';
import styles from "./page.module.css";
import DefaultError from './components/errors/defaultError';

export default function Home() {
  return (
    	<>
        <Hero/>
        <div className={styles['content-padding']}>    
            <div className={styles["feed-container"]}>
                <h1 className="h1-dark">Your Gaming Feed</h1>
                <a href="/feed">
                    View All
                </a>
                <ErrorBoundary FallbackComponent={DefaultError}>
                    <FeedList />            
                </ErrorBoundary>        
            </div>
        </div>
      </>
    	
  )
}
