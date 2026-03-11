"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function DeleteServiceDeptAction(id: number) {
    await prisma.servicedept.delete({ where: { ServiceDeptID: id } });
    revalidatePath("/ServiceDept");
    redirect("/ServiceDept");
}