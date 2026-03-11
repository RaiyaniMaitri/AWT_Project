"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function AddUserAction(formData: FormData) {
  const UserName = formData.get("UserName") as string;
  const Password = formData.get("Password") as string;
  const EmailAddress = formData.get("EmailAddress") as string;
  const MobileNo = formData.get("MobileNo") as string;
  const CampusID = Number(formData.get("CampusID"));

  await prisma.sec_user.create({
    data: {
      UserName,
      Password,
      EmailAddress,
      MobileNo,
      campus: {
      connect: { CampusID }
    }
    },
  });

  revalidatePath("/sec_user");
  redirect("/sec_user");
}

export { AddUserAction };
