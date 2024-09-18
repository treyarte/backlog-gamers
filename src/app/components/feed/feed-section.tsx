import { getArticles } from "@/actions/articleActions";
import { Article } from "@prisma/client";
import { ErrorBoundary } from "react-error-boundary";
import styles from "../../page.module.css";
import DefaultError from "../errors/defaultError";
import BlgContainer from "../utils/containers/BlgContainer";
import FeedList from "./feed-list";
import { ArticleDto } from "@/app/models/ArticleDto";

const defaultLimit = 20;

const FeedSection = async () =>{
    let data:ArticleDto[] = [];

    try {
        const res = await getArticles(0, defaultLimit);
        if(res.status === 'success') {
            data = res.data;
        }
        
    } catch (error) {
        console.error(error);
        throw new Error("Failed to get Gaming Feed")
    }

    return (
        <div id="feed">
        <BlgContainer>
            <div className={styles["feed-container"]}>
                <div className="flex items-center justify-between">
                    <h1 className="h1-dark text-xl md:text-3xl">Your Gaming Feed</h1>
                    <a className="text-lg md:text-xl underline" href="/feed">
                        View All
                    </a>
                </div>
                <ErrorBoundary FallbackComponent={DefaultError}>
                    <FeedList initialArticles={data} take={defaultLimit} />            
                </ErrorBoundary>        
            </div>
        </BlgContainer>
        </div>
    )
}

export default FeedSection;