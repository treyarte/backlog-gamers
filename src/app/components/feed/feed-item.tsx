import { faComment, faShareFromSquare, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./feed-item.module.css";

export default function NewsItem() {

    return (
        <div className={`flex-dual ${styles["feed-item"]}`}>
            <div className={styles["feed-left"]}>
                <img src="https://assets-prd.ignimgs.com/2023/11/29/mercenary-1-1701300675193.jpg" alt="News Image" />
            </div>
            <div className={styles["feed-right"]}>
                <div className={styles["feed-details"]}>
                    <div>
                        Source: <a href="ign.com">IGN</a>
                    </div>
                    <div>
                        June 4, 2023
                    </div>
                    <div className={"ellipsis-text"}>
                    In a livestream today developer Grinding Gear Games made a slew of announcements, including a first look at a new playable class in its upcoming ARPG Path of Exile 2: the mercenary. 
                    </div>
                    <div className={styles["feed-actions"]}>
                        <div className={styles["feed-action-item"]}>
                            <FontAwesomeIcon icon={faThumbsUp} />
                            32
                        </div>
                        <div  className={styles["feed-action-item"]}>
                            <FontAwesomeIcon icon={faComment} />
                            124
                        </div >
                        <div className={styles["feed-action-item"]}>
                            <FontAwesomeIcon icon={faShareFromSquare} />
                            12
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}