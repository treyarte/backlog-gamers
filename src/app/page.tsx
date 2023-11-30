import Image from 'next/image'
import styles from './page.module.css'
import FeedItem from './components/feed/feed-item'

export default function Home() {
  return (
    <main className={styles.main}>
    	<div>
			<FeedItem />
    	</div>
    </main>
  )
}
