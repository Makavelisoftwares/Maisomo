import { Prisma } from "@/lib/db";
import { ServerSession } from "@/utils/ServerSession";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { title, category, description } = await req.json();

    if (!title || !category || !description) {
      return NextResponse.json("missing fields", { status: 400 });
    }

    const { email } = await ServerSession();

    const User = await Prisma.user.findUnique({
      where: {
        email,
      },
    });

    const Course = await Prisma.course.create({
      data: {
        categoryId: category,
        description,
        instructorId: User?.id,
        title,
      },
    });

    return NextResponse.json(Course, { status: 200 });
  } catch (error) {
    console.log("FAILED TO CREATE COURSE");
  }
};
