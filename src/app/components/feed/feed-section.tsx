import { getArticles, getUserArticles } from "@/actions/articleActions";
import { ArticleDto } from "@/app/models/ArticleDto";
import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styles from "../../page.module.css";
import DefaultError from "../errors/defaultError";
import BlgContainer from "../utils/containers/BlgContainer";
import FeedItem from "./feed-item";
import LoadMoreFeed from "./LoadMoreFeed";

const defaultLimit = 8;

type Props = {
    rightSideAction:ReactNode;
    showLoadMore?:boolean;
}

const FeedSection = async ({rightSideAction, showLoadMore}:Props) =>{
    let data:ArticleDto[] = [];

    try {
        const res = await getUserArticles(0, defaultLimit);
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
                    <h1 className="h1-dark text-xl md:text-3xl hidden sm:block">Your Gaming News Feed</h1>
                    <h1 className="h1-dark text-xl md:text-3xl sm:hidden">Your Gaming Feed</h1>
                    {rightSideAction}

                </div>
                <ErrorBoundary FallbackComponent={DefaultError}>
                    <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8">                            
                        {data.map((article:ArticleDto) => (
                            <FeedItem 
                                key={article.id}
                                article={article}
                            />
                        ))}
                        {showLoadMore && (
                            <LoadMoreFeed
                                initialArticles={data}
                                index={defaultLimit}
                                pageSize={defaultLimit}
                            />         
                        ) }
                    </div>                               
                </ErrorBoundary>        
            </div>
        </BlgContainer>
        </div>
    )
}

export default FeedSection;