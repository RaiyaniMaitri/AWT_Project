
"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function AddCampusAction(formData: FormData) {
    const CampusName = formData.get("CampusName") as string;
    const Address = formData.get("Address") as string;

    await prisma.campus.create({
        data: {
            CampusName,
            Address,
        }
    });

    revalidatePath("/Campus");
    redirect("/Campus");
}

export { AddCampusAction };
