"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function EditSec_UserAction(formData: FormData) {
    const id = Number(formData.get("id"));
    const UserName = formData.get("UserName") as string;
    const EmailAddress = formData.get("EmailAddress") as string;
    const Password = formData.get("Password") as string;
    const MobileNo = formData.get("MobileNo") as string;
    const ProfileImage = formData.get("ProfileImage") as string;
    const CampusID = Number(formData.get("CampusID"));

    await prisma.sec_user.update({
        where: {
            UserID: id,
        },
        data: {
            UserName,
            EmailAddress,
            Password,
            MobileNo,
            ProfileImage,
            CampusID,
            Modified: new Date(),
        },
    });

    revalidatePath("/Sec_User");
    redirect("/Sec_User");
}

export { EditSec_UserAction };
