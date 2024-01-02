import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Enroled } from "../Enroled";
import { EnrolledCards } from "../Student/EnrolledCards";
import { Greetings } from "./Greetings";
import { InstructorCard } from "./InstructorCards";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export const InstructorDasboard = ({ enrols }) => {
  return (
    <div>
      {/* Greetings */}
      <div>
        <Greetings />
        <InstructorCard />

        <Card className="shadow-none mt-3 border-none">
          <CardHeader>
            <CardTitle>Enrolled Courses</CardTitle>
          </CardHeader>

          {enrols?.length < 1 ? (
            <CardContent>
              <div className="flex items-center justify-center flex-col mt-9 text-zinc-500/70">
                <BookOpen className="h-[70px] w-[70px]" />
                <span>
                  You're currently not enrolled to any course . 
                  <Link href="/dashboard/search " className="text-sky-500 underline">
                   Start Browsing for courses
                  </Link>
                </span>
              </div>
            </CardContent>
          ) : (
            <CardContent className="grid grid-cols-3 gap-3">
              {enrols?.map((data) => (
                <EnrolledCards key={data?.id} data={data} />
              ))}
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};
