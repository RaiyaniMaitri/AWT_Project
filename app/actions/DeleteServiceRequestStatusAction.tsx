"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function DeleteServiceRequestStatusAction(id: number) {
    await prisma.servicerequeststatus.delete({ where: { ServiceRequestStatusID: id } });
    revalidatePath("/ServiceRequestStatus");
    redirect("/ServiceRequestStatus");
}