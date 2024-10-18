// 'use client'
import { ArticleDto } from "@/app/models/ArticleDto";
import { formatDate } from "@/app/utils/dateHelpers";
import FeedItem from "./feed-item";

type Props = {
    initialArticles:ArticleDto[];
    take:number;
}

export default function FeedList({initialArticles, take}:Props) {
    // const [articles, setArticles] = useState(initialArticles)
    // const [skip, setSkip] = useState(take);

    return (
            <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8">                            
                {initialArticles.map((article:ArticleDto) => (
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