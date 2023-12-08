import { Prisma } from "@/lib/db";
import { ServerSession } from "@/utils/ServerSession";
import React from "react";
import { redirect } from "next/navigation";
import { SelectRole } from "../_components/SelectRole";

export default async function RolePage() {
  const { user, email } = await ServerSession();

  if (!user) {
    return redirect("/auth/sign-in");
  }

  const User = await Prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (
    User.role == "ADMINISTRATOR" ||
    User.role == "INSTRUCTOR" ||
    User.role == "STUDENT"
  ) {
    return redirect("/dashboard");
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <SelectRole />
    </div>
  );
}
