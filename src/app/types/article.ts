import { articleSitesEnum } from "../models/enums/articleSitesEnum"

export type articleType = {
    title:string, 
    url:string, 
    shortDescription:string, 
    imageUrl:string, 
    articleDate:string,
    content:string, 
    articleSite:articleSitesEnum
}