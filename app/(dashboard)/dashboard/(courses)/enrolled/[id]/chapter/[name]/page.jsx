import { Preview } from "@/components/Preview";
import { VideoPlayer } from "@/components/Video-player";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Prisma } from "@/lib/db";
import React from "react";
import { AiSheet } from "./_components/AiSheet";

async function StudentChapterPage({ params }) {
  const chapterId = params?.name;

  const chapter = await Prisma.chapter.findUnique({
    where: {
      id: chapterId,
    },
  });

  return (
    <div>
      <Card className="border-none shadow-none">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>
              Chapter:
              {chapter?.title}
            </CardTitle>
            <AiSheet  params={params}/>
          </div>

          <CardDescription>
            {chapter?.video && <VideoPlayer value={chapter?.video} />}
            <Preview value={chapter?.content} />
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default StudentChapterPage;
