import { articleSitesEnum } from "./enums/articleSitesEnum";

export type ArticleDto = {
    id:string,
    title:string,
    url:string,
    imageUrl:string | null,
    articleDate:Date,
    articleSite:articleSitesEnum,
}