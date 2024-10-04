import { prisma } from "@/libs/prisma";
import { toast } from "react-toastify";

export class ArticlesRepo {
    public async getArticles(skip:number, take:number) {
        try {
            const articles = (await prisma.article.findMany({
                skip,
                take,
                orderBy: {
                    updatedAt: 'desc'
                },
                select: {
                    id:true,
                    title:true,
                    url:true,
                    imageUrl:true,
                    articleDate: true,
                    articleSite: true,
                    likes:true
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