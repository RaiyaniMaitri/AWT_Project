
"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function AddServiceDeptAction(formData: FormData) {
    const ServiceDeptName = formData.get("ServiceDeptName") as string;
    const CampusID = Number(formData.get("CampusID"));
    const Description = formData.get("Description") as string;
    const UserID = Number(formData.get("UserID"));

    await prisma.servicedept.create({
        data: {
            ServiceDeptName,
            CampusID,
            Description,
            UserID,
            Created: new Date(),
            Modified: new Date(),
        }
    });

    revalidatePath("/ServiceDept");
    redirect("/ServiceDept");
}

export { AddServiceDeptAction };
