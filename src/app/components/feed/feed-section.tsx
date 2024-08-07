import { ErrorBoundary } from "react-error-boundary";
import DefaultError from "../errors/defaultError";
import FeedList from "./feed-list";
import styles from "../../page.module.css";
import FeedSettings from "./feed-settings";


const FeedSection = () =>{
    return (
        <div className={styles['content-padding']}>    
            <div className={styles["feed-container"]}>
                <h1 className="h1-dark">Your Gaming Feed</h1>
                <FeedSettings />
                <a href="/feed">
                    View All
                </a>
                <ErrorBoundary FallbackComponent={DefaultError}>
                    <FeedList />            
                </ErrorBoundary>        
            </div>
        </div>
    )
}

export default FeedSection;