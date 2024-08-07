import { faComment, faShareFromSquare, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./feed-item.module.css";
import { articleType } from "@/app/types/article";
import { articleSiteType, articleSitesDisplay, articleSitesEnum } from "@/app/models/enums/articleSitesEnum";


type propsType = {
    title:string
    url:string
    date:string
    imgUrl:string
    article:articleType
}

export default function NewsItem(props:propsType) {
    const {
        title,
        url,
        date,
        imgUrl,
        article
    } = props;

    const displaySiteName = ():articleSiteType => {
        const siteEnum:articleSitesEnum = parseInt(`${article?.articleSite}`);
        if(isNaN(siteEnum) || articleSitesEnum[siteEnum] == null){
            return articleSitesDisplay[articleSitesEnum.Unknown];
        }
        const siteType = articleSitesDisplay[siteEnum];
        return siteType;
    }

    return (
        <article className={`${styles["feed-item"]} ${styles["feed-item-dark"]}`}>
            <div className={styles["feed-left"]}>
                <div className={styles["img-container"]}>
                    <a target="_blank" href={url}>
                        <img src={`${imgUrl}`} alt="News Image" />
                    </a>
                </div>
            </div>

            <div className={styles["feed-right"]}>
                <div className={styles["feed-details"]}>
                    <div>
                        Source: <a 
                                    className={styles.source} 
                                    target="blank"
                                    href={displaySiteName().url}>
                                        {displaySiteName().name}
                                    </a>
                    </div>
                    <div className={styles["date-text"]}>
                        {date}
                    </div>
                    <div className={`${styles["desc-text"]} ellipsis-text`}>
                        <a className="link-no-style" target="_blank" href={url}>
                            {title}
                        </a>
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