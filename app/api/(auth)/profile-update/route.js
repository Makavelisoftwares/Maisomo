import { Prisma } from "@/lib/db";
import { ServerSession } from "@/utils/ServerSession";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  const { fullnames, useremail } = await req.json();
  const { email } = await ServerSession();

  if (!fullnames || !email) {
    return NextResponse.json("missing profile field values", { status: 400 });
  }

  try {
    const userfullname = fullnames.split(" ");

    await Prisma.user.update({
      data: {
        email: useremail,
        firstname: `${userfullname[0]}`,
        lastname: ` ${userfullname[1]}`,
        name: fullnames,
      },
      where: {
        email: email,
      },
    });

    return NextResponse.json("proile succesfully updated", { status: 200 });
  } catch (error) {
    console.log("FAILED UPDATING PROFILE");
  }
};
