
"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


async function AddServiceRequestTypeAction(formData: FormData) {
    const ServiceTypeID = Number(formData.get("ServiceTypeID"));
    const ServiceDeptID = Number(formData.get("ServiceDeptID"));
    const ServiceRequestTypeName = formData.get("ServiceRequestTypeName") as string;
    const Description = formData.get("Description") as string;
    const Sequence = formData.get("Sequence") ? (formData.get("Sequence") as string) : null;
    const UserID = Number(formData.get("UserID"));

    await prisma.servicerequesttype.create({
        data: {
            ServiceTypeID,
            ServiceDeptID,
            ServiceRequestTypeName,
            Description,
            Sequence,
            UserID,
            Created: new Date(),
            Modified: new Date(),
            RequestTotal: 0,
            RequestPending: 0,
            RequestClosed: 0,
            RequestCancelled: 0,
        }
    });

    revalidatePath("/ServiceRequestType");
    redirect("/ServiceRequestType");
}

export { AddServiceRequestTypeAction };
