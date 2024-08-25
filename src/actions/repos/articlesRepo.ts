import { prisma } from "@/libs/prisma";

export class ArticlesRepo {
    public async getArticles() {
        try {
            const articles = (await prisma.article.findMany({
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