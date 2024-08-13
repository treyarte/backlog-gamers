/**So in the dev we don't open multiple database connections
 * Use this prisma obj instead of PrismaClient directly
**/
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {prisma: PrismaClient};

export const prisma = globalForPrisma.prisma || new PrismaClient({log: ['query']});

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}