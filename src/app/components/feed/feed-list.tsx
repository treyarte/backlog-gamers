import { getArticles } from "@/actions/articleActions";
import FeedItem from "./feed-item";
import styles from "./feed-list.module.css";
import { articleType } from "@/app/types/article";
import { formatDate } from "@/app/utils/dateHelpers";
import { Article } from "@prisma/client";

export default async function FeedList() {
    let data:Article[] = [];

    try {
        const res = await getArticles();
        if(res.status === 'success') {
            data = res.data;
        }
        
    } catch (error) {
        console.error(error);
        throw new Error("Failed to get Gaming Feed")
    }
    return (
            <div className={styles["feed-list"]}>                            
                {data.map((article:Article) => (
                    <FeedItem 
                        key={article.id}
                        title={article.title} 
                        date={formatDate(article.updatedAt)}
                        url={article.url} 
                        imgUrl={article.imageUrl} 
                        article={article}
                    />
                ))}                                          
            </div>        
    )
}