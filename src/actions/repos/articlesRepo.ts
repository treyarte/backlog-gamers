import { prisma } from "@/libs/prisma";

export class ArticlesRepo {
    public async getArticles(skip:number, take:number) {
        try {
            const articles = (await prisma.article.findMany({
                skip,
                take,
                orderBy: {
                    updatedAt: 'desc'
                }
            }));

            return articles;
        } catch (error) {
            console.error(error);        
            throw error;
        }
    }
}