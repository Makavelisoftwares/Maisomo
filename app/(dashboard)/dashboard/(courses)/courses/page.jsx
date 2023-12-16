import { MyCourses } from "@/app/(dashboard)/_components/Mycourses/MyCourses";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

function MyCoursesPage() {
  return (
    <Card className="mt-4 border-none shadow-none">
      <CardHeader>
        <CardTitle>Created Courses</CardTitle>
        <CardDescription className="flex items-center justify-between">
          <span>This page displays all courses you created and published</span>
          <Button
            size="sm"
            className="text-white bg-sky-500 hover:bg-sky-500"
            asChild
          >
            <Link className="flex items-center space-x-2" href="/dashboard/new">
              <span>
                <PlusCircle />
              </span>
              <span>New course</span>
            </Link>
          </Button>
        </CardDescription>
      </CardHeader>


      <CardContent>
        <MyCourses/>
      </CardContent>
    </Card>
  );
}

export default MyCoursesPage;
