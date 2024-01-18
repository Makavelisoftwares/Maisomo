import { Prisma } from "@/lib/db";
import { model } from "@/utils/AI";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { courseId, chapterId } = await req.json();

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
    Based on the title and keywords in Chapter [${Chapter?.title}] and Course [${Course?.title}], what are the most important concepts that learners should understand by the end? Briefly explain each concept and its significance within the broader context of the course.You can also provide real youtube channel links and book titles including links.
    `;

    const result = await model.generateContentStream(prompt);
    const response = await result.response;
    // const text = response.text();

    let content;
    response.candidates.forEach((item) => {
      console.log(
        item.content.parts.forEach((i) => {
          content=i.text;
        })
      );
    });

    return NextResponse.json(content, { status: 200 });
  } catch (error) {
    console.log("AI ERROR!!!", error);
    return NextResponse.json("error occured", { status: 400 });
  }
};
