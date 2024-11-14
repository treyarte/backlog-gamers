'use server';
import { ActionResults } from "@/types";
import { ArticlesRepo } from "./repos/articlesRepo";
import { Article } from "@prisma/client";
import { sanitizeInputInt, sanitizeInputSlug } from "@/libs/serverSanitizers";
import { ArticleDto } from "@/app/models/ArticleDto";
import { auth } from "@/auth";
import { getUserExcludedSources } from "./repos/userFeedSettingsRepo";
import { articleSitesEnum } from "@/app/models/enums/articleSitesEnum";

const articlesRepo = new ArticlesRepo();

export async function getArticles(skip:number, take:number) : Promise<ActionResults<ArticleDto[]>> {
    try {
        skip = sanitizeInputInt(skip);
        take = sanitizeInputInt(take);
        const articles = await articlesRepo.getArticles(skip, take);

        return {status: "success", data:articles};
    } catch (error) {
        console.error(error);
        return {status: "error", error: "Something went wrong"};
    }
}

export async function getUserArticles(skip:number, take:number, excludedSources:articleSitesEnum[]) : Promise<ActionResults<ArticleDto[]>> {
    try {
        skip = sanitizeInputInt(skip);
        take = sanitizeInputInt(take);
        const articles = await articlesRepo.getArticlesWithFilter(skip, take, excludedSources);
        return {status: "success", data:articles};

    } catch (error) {
        console.error(error);
        return {status: "error", error: "Something went wrong"};
    }
}

export async function getArticleBySlug(slug:string) : Promise<ActionResults<Article | null | undefined>> {
    try {
        slug = sanitizeInputSlug(slug);
        const article = await articlesRepo.getArticleBySlug(slug);
        return {status: "success", data:article};
    } catch (error) {
        return {status: "error", error: "Could not find article"}
    }
}