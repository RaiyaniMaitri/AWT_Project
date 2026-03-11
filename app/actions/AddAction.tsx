"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type CreateActionParams = {
  model: keyof typeof prisma; // campus | sec_user | staff | etc
  formData: FormData;
  excludeFields?: string[];   // fields to ignore (ID, Created, Modified)
  redirectPath: string;
};

export async function createAction({
  model,
  formData,
  excludeFields = [],
  redirectPath,
}: CreateActionParams) {
  const data: Record<string, any> = {};

  for (const [key, value] of formData.entries()) {
    if (excludeFields.includes(key)) continue;
    if (value === "") continue;

    data[key] = value;
  }

//   // SAFETY CHECK
//   if (!(model in prisma)) {
//     throw new Error(`Invalid Prisma model: ${model}`);
//   }

  await (prisma[model] as any).create({ data });

  revalidatePath(redirectPath);
  redirect(redirectPath);
}
