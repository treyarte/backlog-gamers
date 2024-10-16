import { ArticleSource } from "@prisma/client";
import { getSourcesFromDb } from "./repos/articleSourcesRepo";
import { ActionResults } from "@/types";

export async function getSources() : Promise<ActionResults<ArticleSource[]>> {
    try {    
        const sources = await getSourcesFromDb();
        return {status: "success", data:sources};
    } catch (error) {
        return {status: "error", error: "Something went wrong"};
    }
}