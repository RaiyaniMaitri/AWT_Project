"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function EditServiceRequestStatusAction(formData: FormData) {
    const id = Number(formData.get("id"));
    const ServiceRequestStatusName = formData.get("ServiceRequestStatusName") as string;
    const ServiceRequestStatusSystemName = formData.get("ServiceRequestStatusSystemName") as string;
    const Sequence = formData.get("Sequence") ? (formData.get("Sequence") as string) : null;
    const Description = formData.get("Description") as string;
    const UserID = Number(formData.get("UserID"));

    const IsOpen = formData.get("IsOpen") === 'true' || formData.get("IsOpen") === 'on';
    const IsNoFurtherActionRequired = formData.get("IsNoFurtherActionRequired") === 'true' || formData.get("IsNoFurtherActionRequired") === 'on';
    const IsAllowedForTechnician = formData.get("IsAllowedForTechnician") === 'true' || formData.get("IsAllowedForTechnician") === 'on';

    await prisma.servicerequeststatus.update({
        where: {
            ServiceRequestStatusID: id,
        },
        data: {
            ServiceRequestStatusName,
            ServiceRequestStatusSystemName,
            Sequence,
            Description,
            UserID,
            IsOpen,
            IsNoFurtherActionRequired,
            IsAllowedForTechnician,
            Modified: new Date(),
        },
    });

    revalidatePath("/ServiceRequestStatus");
    redirect("/ServiceRequestStatus");
}

export { EditServiceRequestStatusAction };
