"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function DeleteServiceRequestAction(id: number) {
    await prisma.servicerequest.delete({ where: { ServiceRequestID: id } });
    revalidatePath("/ServiceRequest");
    redirect("/ServiceRequest");
}