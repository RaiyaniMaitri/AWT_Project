import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@/app/generated/prisma/client";
const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3310,
    user: "root",
    password: "",
    database: "service_management",
    connectionLimit: 5
})
export const prisma = new PrismaClient({ adapter });