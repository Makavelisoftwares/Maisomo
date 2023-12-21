import { Prisma } from "@/lib/db";
import { ServerSession } from "@/utils/ServerSession";
import { NextResponse } from "next/server";

import bcrypt from "bcrypt";

export const PUT = async (req) => {
  const { newpassword, currentpassword } = await req.json();

  const { email } = await ServerSession();

  if (!newpassword || !currentpassword) {
    return NextResponse.json("missing password credentials", { status: 400 });
  }

  try {
    const User = await Prisma.user.findUnique({
      where: {
        email,
      },
    });

    const comparePasswords = await bcrypt.compare(
      currentpassword,
      User?.password
    );

    if (!comparePasswords) {
      return NextResponse.json("incorrect current password", { status: 400 });
    }

    const updatedPassword = await bcrypt.hash(newpassword, 10);
    const newUpdate = await Prisma.user.update({
      data: {
        password: updatedPassword,
      },
      where: {
        email: email,
      },
    });

    return NextResponse.json("password successfully updated", { status: 200 });
  } catch (error) {
    console.log("FAILED UPDATING PASSWORDS");
  }
};
