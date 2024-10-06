'use client';
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
import LikeButton from "../utils/buttons/LikeButton";
import { getAuthUserId } from "@/actions/authActions";
import { useSession } from "next-auth/react";


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

    const userId = useSession();
    
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
                        <div className="flex gap-1">
                        <LikeButton 
                            articleId={article.id}
                            hasLiked={article.likes?.map(l => l.userId).includes(userId.data?.user.id ?? "")}
                        />
                            {article.likes?.length ?? 0 > 0 ? article.likes.length : "" }
                            </div>
                        {/* <button className={`${styles["feed-action-item"]} btn-no-style`}>
                            <AiFillLike />
                            {article.likes}
                        </button> */}
                        <div className="flex gap-1">
                            <div>
                        <button className={`${styles["feed-action-item"]} btn-no-style`}>
                            <AiFillMessage size={24} />
                            {Array.isArray(article.comments) ? article.comments.length : ""}
                        </button >
                        </div>
                        </div>
                        <div className="flex gap-1">
                            <div>
                        <button className={`${styles["feed-action-item"]} btn-no-style`}>
                            <AiOutlineShareAlt size={24}/>
                            {article.shares}
                        </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}