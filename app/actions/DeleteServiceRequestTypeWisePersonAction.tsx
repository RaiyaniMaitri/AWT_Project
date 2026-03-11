"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function DeleteServiceRequestTypeWisePersonAction(id: number) {
    await prisma.servicerequesttypewiseperson.delete({ where: { ServiceRequestTypeWisePersonID: id } });
    revalidatePath("/ServiceRequestTypeWisePerson");
    redirect("/ServiceRequestTypeWisePerson");
}