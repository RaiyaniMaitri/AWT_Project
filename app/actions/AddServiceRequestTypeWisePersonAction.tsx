
"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function AddServiceRequestTypeWisePersonAction(formData: FormData) {
    const ServiceRequestTypeID = Number(formData.get("ServiceRequestTypeID"));
    const StaffID = Number(formData.get("StaffID"));
    const FromDate = new Date(formData.get("FromDate") as string);
    const ToDate = formData.get("ToDate") ? new Date(formData.get("ToDate") as string) : null;
    const Description = formData.get("Description") as string;
    const UserID = Number(formData.get("UserID"));

    await prisma.servicerequesttypewiseperson.create({
        data: {
            ServiceRequestTypeID,
            StaffID,
            FromDate,
            ToDate,
            Description,
            UserID,
            Created: new Date(),
            Modified: new Date(),
        }
    });

    revalidatePath("/ServiceRequestTypeWisePerson");
    redirect("/ServiceRequestTypeWisePerson");
}

export { AddServiceRequestTypeWisePersonAction };
