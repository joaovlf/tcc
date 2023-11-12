import { PrismaClient } from "@prisma/client";


class DatabaseClient  extends PrismaClient {}


export const dbClient = new DatabaseClient();