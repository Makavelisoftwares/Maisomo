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

export const PUT = async (req) => {
  try {
    const { courseId } = await req.json();

    const checkCoursePublished = await Prisma.course.findUnique({
      where: {
        id: courseId,
      },
    });

    if (!checkCoursePublished.published) {
      await Prisma.course.update({
        data: {
          published: true,
        },
        where: {
          id: courseId,
        },
      });

      return NextResponse.json(
        {
          message: "course has been published",
          publishment: checkCoursePublished.published,
        },
        { status: 200 }
      );
    }


    await Prisma.course.update({
      data: {
        published: false,
      },
      where: {
        id: courseId,
      },
    });

    return NextResponse.json(
      {
        message: "course has been unpublished",
        publishment: checkCoursePublished.published,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("FAILED TO UPDATE PUBLISHED", error.message);
  }
};
