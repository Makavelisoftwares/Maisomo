import { Preview } from "@/components/Preview";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Prisma } from "@/lib/db";
import { UnitsSideBar } from "./Units";
import { UnitButton } from "./UnitButton";
import { PublishButton } from "./PublishButton";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";

export const CreatedCourse = async ({ id }) => {
  const Course = await Prisma.course.findUnique({
    where: {
      id,
    },
  });

  const Chapters = await Prisma.chapter.findMany({
    where: {
      courseId: Course?.id,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <Card className="border-none dark:bg-inherit shadow-none">
      <CardHeader>
        <CardTitle className="uppercase">{Course?.title}</CardTitle>
        <CardDescription>
          <Preview value={`${Course?.description.slice(0, 700)}...`} />
        </CardDescription>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="my-2">
              <UnitButton />
            </div>

            <div className={cn("block", Chapters?.length < 1 && "hidden")}>
              <PublishButton courseId={Course?.id} />
            </div>
          </div>

          <div>
            {Chapters < 1 ? (
              <div className="flex items-center justify-center mt-5">
                <div className="w-[500px] text-sm text-center text-zinc-500  border border-zinc-400/30 p-3">
                  <div className="flex items-center space-x-3 ">
                    <div className="">
                      This course requires atleast a chapter for it to be
                      <span className="text-emerald-500 mx-1">published</span>
                    </div>
                    <BookOpen />
                  </div>

                  <div className="flex items-center space-x-1">
                    <span>click</span>
                    <UnitButton />
                    <span>to start creating your first chapter</span>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <UnitsSideBar chapters={Chapters} />
              </div>
            )}
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
