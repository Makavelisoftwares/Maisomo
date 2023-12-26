import { Prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const coursePublishment = await Prisma.course.findUnique({
      where: {
        id: params.courseId,
      },
    });
    

    return NextResponse.json(coursePublishment.published, { status: 200 });
  } catch (error) {
    console.log("FAILED FETCHING UNQUE COURSE",error.message);
  }
};
