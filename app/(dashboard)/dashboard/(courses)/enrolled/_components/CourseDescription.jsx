import { Preview } from "@/components/Preview";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Prisma } from "@/lib/db";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const CourseDescription = async ({ courseId }) => {
  const Course = await Prisma.course.findUnique({
    where: {
      id: courseId,
    },
    include: {
      chapters: true,
    },
  });

  //   console.log(Course);

  return (
    <div>
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>{Course?.title}</CardTitle>
          <CardDescription>
            <Preview value={Course?.description} />
          </CardDescription>

          <CardContent>
            <div className="text-2xl font-semibold mt-4 mb-2">
              {Course?.chapters?.length} Chapters
            </div>

            {Course?.chapters?.map((chapter) => (
              <div key={chapter?.id}>
                <div className="flex items-center justify-between p-3 py-3 border mb-3 bg-sky-300/50 border-zinc-300/30">
                  <div>{chapter?.title}</div>
                  <div>
                    <Link
                      href={`/dashboard/enrolled/${courseId}/chapter/${chapter?.id}`}
                    >
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};
