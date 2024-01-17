import { NextResponse } from "next/server";
import { Prisma } from "@/lib/db";
import { model } from "@/utils/AI";

export const POST = async (req) => {
  try {
    const { question, courseId, chapterId } = await req.json();

    if (!courseId || !chapterId || !question) {
      return NextResponse.json("missing chapter or course or question", {
        status: 400,
      });
    }

    if (!courseId || !chapterId) {
      return NextResponse.json("missing chapter or course", { status: 400 });
    }

    const Course = await Prisma.course.findUnique({
      where: {
        id: courseId,
      },
    });

    const Chapter = await Prisma.chapter.findUnique({
      where: {
        id: chapterId,
      },
    });

    const prompt = `
    Dont't answer ${question} if it's irrelevant to ${Course?.title} or ${Chapter?.title}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json(text, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("ERROR QUESTION AI", { status: 400 });
  }
};
