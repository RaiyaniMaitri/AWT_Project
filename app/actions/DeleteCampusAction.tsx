"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function DeleteCampusAction(id: number) {
    await prisma.campus.delete({ where: { CampusID: id } });
    revalidatePath("/Campus");
    redirect("/Campus");
}