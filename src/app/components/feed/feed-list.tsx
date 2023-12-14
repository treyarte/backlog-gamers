import FeedItem from "./feed-item";
import styles from "./feed-list.module.css";

export default function FeedList() {
    return (
        <div className={styles["feed-container"]}>
            <h1 className="h1-dark">Your Gaming Feed</h1>
            <a href="/feed">
                View All
            </a>
            <div className={styles["feed-items"]}>
                <FeedItem />
                <FeedItem />
                <FeedItem />
                <FeedItem />
                <FeedItem />
                <FeedItem />
            </div>
        </div>
    )
}