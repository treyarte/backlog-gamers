import { ActionResults } from "@/types";
import { ArticlesRepo } from "./repos/articlesRepo";
import { Article } from "@prisma/client";
import { sanitizeInputInt } from "@/libs/serverSanitizers";

const articlesRepo = new ArticlesRepo();

export async function getArticles(skip:number, take:number) : Promise<ActionResults<Article[]>> {
    try {
        skip = sanitizeInputInt(skip);
        take = sanitizeInputInt(take);
        const articles = await articlesRepo.getArticles(skip, take);

        return {status: "success", data:articles};
    } catch (error) {
        return {status: "error", error: "Something went wrong"};
    }
}