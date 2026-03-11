"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function DeleteServiceDeptPersonAction(id: number) {
    await prisma.servicedeptperson.delete({ where: { ServiceDeptPersonID: id } });
    revalidatePath("/ServiceDeptPerson");
    redirect("/ServiceDeptPerson");
}