"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function EditServiceRequestTypeAction(formData: FormData) {
    const id = Number(formData.get("id"));
    const ServiceTypeID = Number(formData.get("ServiceTypeID"));
    const ServiceDeptID = Number(formData.get("ServiceDeptID"));
    const ServiceRequestTypeName = formData.get("ServiceRequestTypeName") as string;
    const Description = formData.get("Description") as string;
    const Sequence = formData.get("Sequence") ? (formData.get("Sequence") as string) : null;
    const UserID = Number(formData.get("UserID"));

    await prisma.servicerequesttype.update({
        where: {
            ServiceRequestTypeID: id,
        },
        data: {
            ServiceTypeID,
            ServiceDeptID,
            ServiceRequestTypeName,
            Description,
            Sequence,
            UserID,
            Modified: new Date(),
        },
    });

    revalidatePath("/ServiceRequestType");
    redirect("/ServiceRequestType");
}

export { EditServiceRequestTypeAction };
