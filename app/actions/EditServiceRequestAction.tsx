"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function EditServiceRequestAction(formData: FormData) {
    const id = Number(formData.get("id"));
    const ServiceRequestNo = formData.get("ServiceRequestNo") as string;
    const ServiceRequestDateTime = new Date(formData.get("ServiceRequestDateTime") as string);
    const StaffID = formData.get("StaffID") ? Number(formData.get("StaffID")) : null;
    const ServiceRequestTypeID = Number(formData.get("ServiceRequestTypeID"));
    const ServiceRequestTitle = formData.get("ServiceRequestTitle") as string;
    const ServiceRequestDescription = formData.get("ServiceRequestDescription") as string;
    const ServiceRequestStatusID = Number(formData.get("ServiceRequestStatusID"));
    const UserID = Number(formData.get("UserID"));

    await prisma.servicerequest.update({
        where: {
            ServiceRequestID: id,
        },
        data: {
            ServiceRequestNo,
            ServiceRequestDateTime,
            StaffID,
            ServiceRequestTypeID,
            ServiceRequestTitle,
            ServiceRequestDescription,
            ServiceRequestStatusID,
            UserID,
            Modified: new Date(),
        },
    });

    revalidatePath("/ServiceRequest");
    redirect("/ServiceRequest");
}

export { EditServiceRequestAction };
