import FeedList from './components/feed/feed-list';
import Hero from './components/hero/hero';
import styles from "./page.module.css";

export default function Home() {
  return (
    	<>
        <Hero/>
        <div className={styles['content-padding']}>
			    <FeedList />
        </div>
      </>
    	
  )
}
