import { ErrorBoundary } from "react-error-boundary";
import DefaultError from "../errors/defaultError";
import FeedList from "./feed-list";
import styles from "../../page.module.css";
import FeedSettings from "./feed-settings";
import CustomizeFeed from "../setting/feed/CustomizeFeed";
import BlgContainer from "../utils/containers/BlgContainer";


const FeedSection = () =>{
    return (
        <BlgContainer>
            <div className={styles["feed-container"]}>
                <h1 className="h1-dark">Your Gaming Feed</h1>
                {/* <FeedSettings /> */}
                {/* <CustomizeFeed /> */}
                <a href="/feed">
                    View All
                </a>
                <ErrorBoundary FallbackComponent={DefaultError}>
                    <FeedList />            
                </ErrorBoundary>        
            </div>
        </BlgContainer>
    )
}

export default FeedSection;