'use server'
import { articleSitesEnum } from "@/app/models/enums/articleSitesEnum";
import { auth } from "@/auth";
import { prisma } from "@/libs/prisma";
import { isNullOrWhitespace } from "@/libs/stringHelpers";

/**
 * Get a list of a user's excluded article sources
 * @param userId 
 * @returns 
 */
export async function getUserExcludedSources(userId:string) : Promise<number[]> {
    if(isNullOrWhitespace(userId)) {
        return [];
    }
    const res = await prisma.userFeedSettings.findUnique({
        where: {
            userId
        },
        select: {
            excludedSources:true
        }
    });
    
    return res?.excludedSources ?? [];
}

/**
 * Removes an excluded source from the user's excluded sources
 * @param userId 
 * @param excludedSource 
 */
export async function RemoveExcludeSource(excludedSource:articleSitesEnum) {
    const session = await auth();
    const userId = session?.user.id ?? "";
    const excludedSources = await  getUserExcludedSources(userId);
    console.info(excludedSources);
   await prisma.userFeedSettings.upsert({
        where: {userId},
        update: {
            excludedSources: {
                set: excludedSources.filter(e => e !== excludedSource)
            }
        },
        create: {
            userId,
            excludedSources: [excludedSource]
        }
    })
}

/**
 * Add an article source to the user's excluded sources list
 * @param userId 
 * @param excludedSource 
 */
export async function AddExcludeSource(excludedSource:articleSitesEnum) {
    const session = await auth();
    const userId = session?.user.id ?? "";
    const excludedSources = await getUserExcludedSources(userId);
    
    excludedSources.push(excludedSource);

    await prisma.userFeedSettings.upsert({
        where: {userId},
        update: {
            excludedSources
        },
        create: {
            userId,
            excludedSources: [excludedSource]
        }
    })
}

/**
 * Overwrites the existing users excluded sources
 * with a new list
 * @param excludedSource 
 */
export async function replaceExcludedSources(excludedSources:articleSitesEnum[]) {
    const session = await auth();
    const userId = session?.user.id ?? "";

    if(isNullOrWhitespace(userId)) {
        return;
    }

    await prisma.userFeedSettings.upsert({
        where: {userId},
        update: {
            excludedSources
        },
        create: {
            userId,
            excludedSources
        }
    })
}