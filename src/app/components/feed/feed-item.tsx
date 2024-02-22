import { faComment, faShareFromSquare, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./feed-item.module.css";

export default function NewsItem() {

    return (
        <article className={`${styles["feed-item"]} ${styles["feed-item-dark"]}`}>
            <div className={styles["feed-left"]}>
                <div className={styles["img-container"]}>
                    <img src="https://www.gematsu.com/wp-content/uploads/2024/02/Unicorn-Overlord-Demo_02-21-24-768x432.jpg" alt="News Image" />
                </div>
            </div>

            <div className={styles["feed-right"]}>
                <div className={styles["feed-details"]}>
                    <div>
                        Source: <a className={styles.source} href="ign.com">IGN</a>
                    </div>
                    <div className={styles["date-text"]}>
                        June 4, 2023
                    </div>
                    <div className={`${styles["desc-text"]} ellipsis-text`}>
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
        </article>
    )
}