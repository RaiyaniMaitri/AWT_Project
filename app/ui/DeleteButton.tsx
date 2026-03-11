"use client";

import { deleteAction } from "@/app/actions/DeleteAction";

type DeleteButtonProps = {
  model:"sec_user" | "staff" | "campus" | "servicedept" | "servicerequeststatus" | "servicedeptperson" | "servicetype" | "servicerequesttype" | "servicerequesttypewiseperson" | "servicerequest" | "servicerequestreply"; // extend as needed
  where: Record<string, number>;
  path: string;
};

export default function DeleteButton({ model, where, path }: DeleteButtonProps) {
  return (
    <form action={deleteAction.bind(null, model, where, path)}>
      <button
        type="submit"
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </form>
  );
}
