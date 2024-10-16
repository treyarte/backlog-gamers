'use server';

import { prisma } from "@/libs/prisma";

export const getSourcesFromDb = async () => {
    try {
        return await prisma.articleSource.findMany();
    } catch (error) {
        console.error(error);
        throw error;
    }
}