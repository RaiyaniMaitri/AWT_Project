
"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function AddStaffAction(formData: FormData) {
    const StaffName = formData.get("StaffName") as string;
    const Phone = formData.get("Phone") as string;
    const Email = formData.get("Email") as string;
    const Description = formData.get("Description") as string;
    const CampusID = Number(formData.get("CampusID"));

    await prisma.staff.create({
        data: {
            StaffName,
            Phone,
            Email,
            Description,
            CampusID,
            Created: new Date(),
            Modified: new Date(),
        }
    });

    revalidatePath("/Staff");
    redirect("/Staff");
}

export { AddStaffAction };
