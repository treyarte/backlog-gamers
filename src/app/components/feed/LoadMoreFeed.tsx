'use client';
import { CircularProgress } from '@nextui-org/react';
import {useInView} from 'react-intersection-observer';
import React, { useEffect, useState } from 'react';
import { getArticles, getUserArticles } from '@/actions/articleActions';
import { toast } from 'react-toastify';
import { ArticleDto } from '@/app/models/ArticleDto';
import FeedItem from './feed-item';

type Props = {
    index:number;
    pageSize:number;
    initialArticles:ArticleDto[];    
}

export default function LoadMoreFeed({index, pageSize, initialArticles}:Props) {
    const {ref, inView} = useInView();
    const [pageIndex, setPageIndex] = useState(1);
    const [moreData, setMoreData] = useState<ArticleDto[]>([]);

    useEffect(() => {
        async function onView() {
            
            const res = await getUserArticles(pageIndex * pageSize, pageSize);
            if(res.status == 'error') {
                throw new Error("Failed to get feed");                
            }
            
            setPageIndex(pageIndex + 1);
            
            setMoreData([...moreData, ...res.data]);
        }

        if(inView) {
            onView();
        }
    }, [inView, index, moreData, pageIndex, pageSize]);

    return (
        <>
        {/*  */}
            {moreData.map(data => (
                <FeedItem 
                    key={data.id}
                    article={data}  
                />
            ))}
            <CircularProgress ref={ref} color="secondary" aria-label="Loading..."/>
        </>
    )
}   
