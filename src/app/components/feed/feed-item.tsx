import { articleSiteType, articleSitesDisplay, articleSitesEnum } from "@/app/models/enums/articleSitesEnum";
import { formatDate } from "@/app/utils/dateHelpers";
import { Article } from "@prisma/client";
import styles from "./feed-item.module.css";
import { AiFillLike } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { ArticleDto } from "@/app/models/ArticleDto";
import {decode} from "html-entities";


type propsType = {
    title:string
    url:string
    date:string
    imgUrl:string
    article:ArticleDto
}

export default function NewsItem(props:propsType) {
    const {
        article
    } = props;

    const displaySiteName = ():articleSiteType => {
        const siteEnum:articleSitesEnum = parseInt(`${article.articleSite}`);
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
                    <a target="_blank" href={article.url}>
                        <img src={`${article.imageUrl}`} alt="News Image" />
                    </a>
                </div>
            </div>

            <div className={styles["feed-right"]}>
                <div className={styles["feed-details"]}>
                    <div>
                        <div className="md:text-xl font-semibold ellipsis-text">
                            <a className="link-no-style" target="_blank" href={article.url}>
                                {decode(article.title, {level: 'html5'})}
                            </a>
                        </div>
                        <div className={styles["date-text"]}>
                            {formatDate(article.articleDate)}
                        </div>
                    </div>

                    <div>
                        Source: <a 
                                    className={styles.source} 
                                    target="blank"
                                    href={displaySiteName().url}>
                                        {displaySiteName().name}
                                    </a>
                    </div>
                    <div className={styles["feed-actions"]}>
                        <button className={`${styles["feed-action-item"]} btn-no-style`}>
                            <AiFillLike />
                            32
                        </button>
                        <button className={`${styles["feed-action-item"]} btn-no-style`}>
                            <AiFillMessage />
                            124
                        </button >
                        <button className={`${styles["feed-action-item"]} btn-no-style`}>
                            <AiOutlineShareAlt />
                            12
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}