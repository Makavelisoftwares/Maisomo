import { Prisma } from "@/lib/db";
import { ServerSession } from "@/utils/ServerSession";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  try {
    const { role } = await req.json();
    const { email } = await ServerSession();

    const UserRoleUpdated = await Prisma.user.update({
      where: {
        email: email,
      },
      data: {
        role: role,
      },
    });

    if (!UserRoleUpdated) {
      return NextResponse.json("Failed to assign user role", { status: 400 });
    }

    return NextResponse.json("successfully assigned role", { status: 200 });
  } catch (error) {
    console.log("ROLE PUT error", error);
  }
};
