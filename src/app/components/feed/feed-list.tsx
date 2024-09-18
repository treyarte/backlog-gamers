'use client'
import { getArticles } from "@/actions/articleActions";
import FeedItem from "./feed-item";
import styles from "./feed-list.module.css";
import { articleType } from "@/app/types/article";
import { formatDate } from "@/app/utils/dateHelpers";
import { Article } from "@prisma/client";
import { useState } from "react";
import { ArticleDto } from "@/app/models/ArticleDto";

type Props = {
    initialArticles:ArticleDto[];
    take:number;
}

export default function FeedList({initialArticles, take}:Props) {
    const [articles, setArticles] = useState(initialArticles)
    const [skip, setSkip] = useState(take);

    return (
            <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8">                            
                {articles.map((article:ArticleDto) => (
                    <FeedItem 
                        key={article.id}
                        title={article.title} 
                        date={formatDate(article.articleDate)}
                        url={article.url} 
                        imgUrl={article.imageUrl ?? ""} 
                        article={article}
                    />
                ))}                
            </div>        
    )
}