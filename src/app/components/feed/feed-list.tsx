import { getArticles } from "@/app/actions/articles";
import FeedItem from "./feed-item";
import styles from "./feed-list.module.css";
import { articleType } from "@/app/models/article";
import { Suspense } from "react";
import DefaultLoading from "../loaders/defaultLoading";
import { ErrorBoundary } from "react-error-boundary";


export default async function FeedList() {
    let data = [];

    try {
        data = await getArticles();        
        
    } catch (error) {
        console.error(error);
        throw new Error("Failed to get feed")
    }
    return (

            <div className={styles["feed-list"]}>                            
                {data.map((article:articleType) => (
                    <FeedItem 
                    title={article.title} 
                    url={article.url} 
                    imgUrl={article.imageUrl} 
                    />
                ))}                                          
            </div>        
    )
}