import React from "react";
import { CourseCover } from "./_components/CourseCover";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CourseCreationLayout({ children }) {
  return (
    <div>
      <CourseCover />

      <Card  className="mt-3 border-none dark:bg-[#121212] shadow-none">
        <CardHeader>
          <CardTitle>Course Creation</CardTitle>
          <CardDescription>
            Fill in the required fields. The course information can still be
            changed later.
          </CardDescription>
        </CardHeader>

        <CardContent className='dark:bg-[#121212]'>{children}</CardContent>
      </Card>
    </div>
  );
}

export default CourseCreationLayout;
