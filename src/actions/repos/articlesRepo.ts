import { prisma } from "@/libs/prisma";
import { toast } from "react-toastify";

export class ArticlesRepo {
    public async getArticles(skip:number, take:number) {
        try {
            const articles = (await prisma.article.findMany({
                orderBy: {
                    articleDate: 'desc'
                },
                distinct: ['title'],
                skip,
                take,
                select: {
                    id:true,
                    title:true,
                    url:true,
                    imageUrl:true,
                    articleDate: true,
                    articleSite: true,
                    likes:true,
                    shares:true,
                    comments:true
                }
            }));

            return articles;
        } catch (error) {
            console.error(error);        
            throw error;
        }
    }

    //TODO refactor
    public async getArticlesWithFilter(skip:number, take:number, excludedSite:number[]) {
        try {
            const articles = (await prisma.article.findMany({
                where: {
                    articleSite: {notIn: excludedSite}
                },
                orderBy: {
                    articleDate: 'desc'
                },
                distinct: ['title'],
                skip,
                take,
                select: {
                    id:true,
                    title:true,
                    url:true,
                    imageUrl:true,
                    articleDate: true,
                    articleSite: true,
                    likes:true,
                    shares:true,
                    comments:true
                }
            }));

            return articles;
        } catch (error) {
            console.error(error);        
            throw error;
        }
    }

    public async getArticleBySlug(slug:string) {
        try {
            return prisma.article.findFirst({
             where: {slug}
            })
        } catch (error) {
            console.error(error);        
            throw error;
        }
    }


}