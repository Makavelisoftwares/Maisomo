import { Preview } from "@/components/Preview";
import { VideoPlayer } from "@/components/Video-player";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Prisma } from "@/lib/db";
import { Trash } from "lucide-react";
import { ChapterDelete } from "./Delete-Chapter";

export const ChapterInfoCard = async ({ id }) => {
  const chapter = await Prisma.chapter.findUnique({
    where: {
      id: id,
    },
  });

  return (
    <Card className="bg-inherit">
      <CardHeader>
        <CardTitle className="flex items-center justify-between ">
          <div>Chapter: {chapter?.title}</div>

          <ChapterDelete id={chapter?.id} />
        </CardTitle>

        <CardContent>
          {chapter?.video && (
            <div>
              <VideoPlayer value={chapter?.video} />
            </div>
          )}
          <Preview className="mt-3" value={chapter?.content} />
        </CardContent>
      </CardHeader>
    </Card>
  );
};
