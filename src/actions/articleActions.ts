import { ActionResults } from "@/types";
import { ArticlesRepo } from "./repos/articlesRepo";
import { Article } from "@prisma/client";

const articlesRepo = new ArticlesRepo();

export async function getArticles() : Promise<ActionResults<Article[]>> {
    try {
        const articles = await articlesRepo.getArticles();

        return {status: "success", data:articles};
    } catch (error) {
        return {status: "error", error: "Something went wrong"};
    }
}