"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function EditServiceDeptAction(formData: FormData) {
    const id = Number(formData.get("id"));
    const ServiceDeptName = formData.get("ServiceDeptName") as string;
    const CampusID = Number(formData.get("CampusID"));
    const Description = formData.get("Description") as string;
    const UserID = Number(formData.get("UserID"));

    await prisma.servicedept.update({
        where: {
            ServiceDeptID: id,
        },
        data: {
            ServiceDeptName,
            CampusID,
            Description,
            UserID,
            Modified: new Date(),
        },
    });

    revalidatePath("/ServiceDept");
    redirect("/ServiceDept");
}

export { EditServiceDeptAction };
