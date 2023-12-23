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
              <PublishButton />
            </div>
          </div>

          <div className="">
            <div>
              <UnitsSideBar chapters={Chapters} />
            </div>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
