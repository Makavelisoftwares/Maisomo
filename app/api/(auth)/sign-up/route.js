import { Prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const { email, password, firstname, lastname } = await req.json();

    if (!email || !password || !firstname || !lastname) {
      return NextResponse.json("missing fields", { status: 400 });
    }

    // FINDING AN EXISTING
    const existingUser = await Prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json("user already exists", { status: 400 });
    }

    if (!existingUser) {
      // HASHING PASSWORD
      const hashedPassword = await bcrypt.hash(password, 10);

      // CREATING A NEW USER
      const newUser = await Prisma.user.create({
        data: {
          email: email,
          password: hashedPassword,
          firstname: firstname,
          lastname: lastname,
          name: `${firstname} ${lastname}`,
        },
      });

      if (!newUser) {
        return NextResponse.json("failed to create this user", { status: 400 });
      }
    }

    return NextResponse.json("success", { status: 200 });
  } catch (error) {
    console.log("FAILED TO CREATE USER!!!!!",error.message);
  }
};
