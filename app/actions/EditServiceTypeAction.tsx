"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function EditServiceTypeAction(formData: FormData) {
    const id = Number(formData.get("id"));
    const ServiceTypeName = formData.get("ServiceTypeName") as string;
    const Description = formData.get("Description") as string;
    const Sequence = formData.get("Sequence") ? (formData.get("Sequence") as string) : null;
    const UserID = Number(formData.get("UserID"));

    const IsForStaff = formData.get("IsForStaff") === 'true' || formData.get("IsForStaff") === 'on';
    const IsForStudent = formData.get("IsForStudent") === 'true' || formData.get("IsForStudent") === 'on';

    await prisma.servicetype.update({
        where: {
            ServiceTypeID: id,
        },
        data: {
            ServiceTypeName,
            Description,
            Sequence,
            UserID,
            IsForStaff,
            IsForStudent,
            Modified: new Date(),
        },
    });

    revalidatePath("/ServiceType");
    redirect("/ServiceType");
}

export { EditServiceTypeAction };
