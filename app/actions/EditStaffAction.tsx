"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function EditStaffAction(formData: FormData) {
    const id = Number(formData.get("id"));
    const StaffName = formData.get("StaffName") as string;
    const Phone = formData.get("Phone") as string;
    const Email = formData.get("Email") as string;
    const Description = formData.get("Description") as string;
    const CampusID = Number(formData.get("CampusID"));

    await prisma.staff.update({
        where: {
            StaffID: id,
        },
        data: {
            StaffName,
            Phone,
            Email,
            Description,
            CampusID,
            Modified: new Date(),
        },
    });

    revalidatePath("/Staff");
    redirect("/Staff");
}

export { EditStaffAction };
