import { Prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  try {
    const id = params.chapterid;

    await Prisma.chapter.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json("chapter successfully deleted", { status: 200 });
  } catch (error) {
    console.log("FAILED TO DELETE CHAPTER");
  }
};
