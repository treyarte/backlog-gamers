'use server';

import { prisma } from "@/libs/prisma";
import { getAuthUserId } from "../authActions";

/**
 * Toggles a like on an article for the current logged in user
 * @param articleId 
 * @param isLiked 
 */
export const toggleLikeArticle = async (articleId:string, isLiked:boolean) => {
    try {
        const userId = await getAuthUserId();

        if(!userId) {
            new Error("Unauthorized")
        }

        if(isLiked) {
            await prisma.like.delete({
                where: {
                    userId_articleId: {
                        userId:userId,
                        articleId:articleId
                    }
                }
            })
        } else {
            const res = await prisma.like.create({
                data: {
                    articleId,
                    userId
                },                
            });
        }
    } catch (error) {
        console.error(error);
        throw error;            
    }
}
