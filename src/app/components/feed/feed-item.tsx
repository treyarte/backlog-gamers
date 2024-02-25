import { faComment, faShareFromSquare, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./feed-item.module.css";

type propsType = {
    title:string
    url:string
    //TODO ADD Date And Source Url
    imgUrl:string
}

export default function NewsItem(props:propsType) {
    const {
        title,
        url,
        imgUrl
    } = props;

    return (
        <article className={`${styles["feed-item"]} ${styles["feed-item-dark"]}`}>
            <div className={styles["feed-left"]}>
                <div className={styles["img-container"]}>
                    <img src={`${imgUrl}`} alt="News Image" />
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
                        {title}
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