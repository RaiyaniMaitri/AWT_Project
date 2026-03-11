"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

/**
 * Universal delete action
 * @param model Prisma model name (sec_user, staff, campus,  etc.)
 * @param where Prisma where condition
 * @param path Route to revalidate & redirect
 */
export async function deleteAction(
  model: keyof typeof prisma,
  where: Record<string, number>,
  path: string
) {
  const dbModel = prisma[model] as any;

  if (!dbModel?.delete) {
    throw new Error(`Invalid Prisma model: ${String(model)}`);
  }

  await dbModel.delete({ where });

  revalidatePath(path);
  redirect(path);
}
