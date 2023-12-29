import { Prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { userId, courseId } = await req.json();

    const enrollments = await Prisma.enrollment.findMany({
      where: {
        courseId: courseId,
        studentId: userId,
      },
    });

    if (enrollments.length > 0) {
      await Prisma.enrollment.deleteMany({
        where: {
          courseId: courseId,
          studentId: userId,
        },
      });

      return NextResponse.json({message:"WITHDRAWED FROM COURSE",enrolled:false}, { status: 200 });
    } else {
      await Prisma.enrollment.create({
        data: {
          studentId: userId,
          courseId: courseId,
        },
      });

      return NextResponse.json({message:"SUCCESSFULLY ENROLLED TO COURSE",enrolled:true}, { status: 200 });
    }
  } catch (error) {
    console.log("FAILED TO BOOKMARK");
  }
};




export const GET = async (req) => {
  try {
    const enrollments = await Prisma.enrollment.findMany();
    return NextResponse.json(enrollments, { status: 200 });
  } catch (error) {
    console.log("FAILED FETCHING COURSE");
  }
};
