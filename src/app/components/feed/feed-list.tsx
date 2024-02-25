import { getArticles } from "@/app/actions/articles";
import FeedItem from "./feed-item";
import styles from "./feed-list.module.css";
import { articleType } from "@/app/models/article";

export default async function FeedList() {
    const data = await getArticles();
    console.info(data)
    return (
        <div className={styles["feed-container"]}>
            <h1 className="h1-dark">Your Gaming Feed</h1>
            <a href="/feed">
                View All
            </a>
            <div className={styles["feed-list"]}>
                {data.map((article:articleType) => (
                    <FeedItem 
                        title={article.title} 
                        url={article.url} 
                        imgUrl={article.imageUrl} 
                    />
                ))}
            </div>
        </div>
    )
}