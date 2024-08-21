import { getArticles } from "@/app/actions/articles";
import FeedItem from "./feed-item";
import styles from "./feed-list.module.css";
import { articleType } from "@/app/types/article";
import { formatDate } from "@/app/utils/dateHelpers";

export default async function FeedList() {
    let data = [];

    try {
        data = await getArticles();        
        
    } catch (error) {
        console.error(error);
        throw new Error("Failed to get Gaming Feed")
    }
    return (
            <div className={styles["feed-list"]}>                            
                {data.map((article:articleType) => (
                    <FeedItem 
                        key={article.id}
                        title={article.title} 
                        date={formatDate(article.articleDate)}
                        url={article.url} 
                        imgUrl={article.imageUrl} 
                        article={article}
                    />
                ))}                                          
            </div>        
    )
}