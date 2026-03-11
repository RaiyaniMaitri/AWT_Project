"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function DeleteServiceRequestTypeAction(id: number) {
    await prisma.servicerequesttype.delete({ where: { ServiceRequestTypeID: id } });
    revalidatePath("/ServiceRequestType");
    redirect("/ServiceRequestType");
}