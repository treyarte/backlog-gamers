import { faComment, faShareFromSquare, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./feed-item.module.css";

export default function NewsItem() {

    return (
        <div className={`flex-dual ${styles["feed-item"]} ${styles["feed-item-dark"]}`}>
            <div className={styles["feed-left"]}>
                <img src="https://assets-prd.ignimgs.com/2023/11/29/mercenary-1-1701300675193.jpg" alt="News Image" />
            </div>
            <div className={styles["feed-right"]}>
                <div className={styles["feed-details"]}>
                    <div>
                        Source: <a className={styles.source} href="ign.com">IGN</a>
                    </div>
                    <div>
                        June 4, 2023
                    </div>
                    <div className={"ellipsis-text"}>
                    In a livestream today developer Grinding Gear Games made a slew of announcements, including a first look at a new playable class in its upcoming ARPG Path of Exile 2: the mercenary. 
                    </div>
                    <div className={styles["feed-actions"]}>
                        <button className={`${styles["feed-action-item"]} btn-no-style`}>
                            <FontAwesomeIcon icon={faThumbsUp} />
                            32
                        </button>
                        <button className={`${styles["feed-action-item"]} btn-no-style`}>
                            <FontAwesomeIcon icon={faComment} />
                            124
                        </button >
                        <button className={`${styles["feed-action-item"]} btn-no-style`}>
                            <FontAwesomeIcon icon={faShareFromSquare} />
                            12
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}