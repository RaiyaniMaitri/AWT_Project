"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function EditServiceDeptPersonAction(formData: FormData) {
    const id = Number(formData.get("id"));
    const ServiceDeptID = Number(formData.get("ServiceDeptID"));
    const StaffID = Number(formData.get("StaffID"));
    const FromDate = new Date(formData.get("FromDate") as string);
    const ToDate = formData.get("ToDate") ? new Date(formData.get("ToDate") as string) : null;
    const Description = formData.get("Description") as string;
    const UserID = Number(formData.get("UserID"));
    const IsHODStaff = formData.get("IsHODStaff") === 'true' || formData.get("IsHODStaff") === 'on';

    await prisma.servicedeptperson.update({
        where: {
            ServiceDeptPersonID: id,
        },
        data: {
            ServiceDeptID,
            StaffID,
            FromDate,
            ToDate,
            Description,
            UserID,
            IsHODStaff,
            Modified: new Date(),
        },
    });

    revalidatePath("/ServiceDeptPerson");
    redirect("/ServiceDeptPerson");
}

export { EditServiceDeptPersonAction };
