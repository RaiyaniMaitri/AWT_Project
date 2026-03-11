"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function EditCampusAction(formData: FormData) {
    const id = Number(formData.get("id"));
    const CampusName = formData.get("CampusName") as string;
    const Address = formData.get("Address") as string;

    await prisma.campus.update({
        where: {
            CampusID: id,
        },
        data: {
            CampusName,
            Address,
            Modified: new Date(),
        },
    });

    revalidatePath("/Campus");
    redirect("/Campus");
}

export { EditCampusAction };
