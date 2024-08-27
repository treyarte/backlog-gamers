import { ErrorBoundary } from "react-error-boundary";
import DefaultError from "../errors/defaultError";
import FeedList from "./feed-list";
import styles from "../../page.module.css";
import FeedSettings from "./feed-settings";
import CustomizeFeed from "../setting/feed/CustomizeFeed";
import BlgContainer from "../utils/containers/BlgContainer";
import { getArticles } from "@/actions/articleActions";
import { Article } from "@prisma/client";

const defaultLimit = 20;

const FeedSection = async () =>{
    let data:Article[] = [];

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
                    <h1 className="h1-dark">Your Gaming Feed</h1>
                    <a className="text-xl underline" href="/feed">
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