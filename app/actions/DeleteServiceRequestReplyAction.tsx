"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function DeleteServiceRequestReplyAction(id: number) {
    await prisma.servicerequestreply.delete({ where: { ServiceRequestReplyID: id } });
    revalidatePath("/ServiceRequestReply");
    redirect("/ServiceRequestReply");
}
