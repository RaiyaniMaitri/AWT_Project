"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function EditServiceRequestReplyAction(formData: FormData) {
    const id = Number(formData.get("id"));
    const ServiceRequestID = Number(formData.get("ServiceRequestID"));
    const StaffID = formData.get("StaffID") ? Number(formData.get("StaffID")) : null;
    const ServiceRequestReplyDateTime = new Date(formData.get("ServiceRequestReplyDateTime") as string);
    const ServiceRequestReplyDescription = formData.get("ServiceRequestReplyDescription") as string;
    const ServiceRequestStatusID = Number(formData.get("ServiceRequestStatusID"));
    const UserID = Number(formData.get("UserID"));

    await prisma.servicerequestreply.update({
        where: {
            ServiceRequestReplyID: id,
        },
        data: {
            ServiceRequestID,
            StaffID,
            ServiceRequestReplyDateTime,
            ServiceRequestReplyDescription,
            ServiceRequestStatusID,
            UserID,
            Modified: new Date(),
        },
    });

    revalidatePath("/ServiceRequestReply");
    redirect("/ServiceRequestReply");
}

export { EditServiceRequestReplyAction };
