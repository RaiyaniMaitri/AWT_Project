"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function DeleteSec_UserAction(id: number) {
    await prisma.sec_user.delete({ where: { UserID: id } });
    revalidatePath("/Sec_User");
    redirect("/Sec_User");
}