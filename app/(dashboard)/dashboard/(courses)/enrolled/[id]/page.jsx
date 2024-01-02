import React from "react";
import { CourseDescription } from "../_components/CourseDescription";

function EnrolledCoursePage({ params }) {
  return (
    <div>
      <CourseDescription courseId={params?.id}/>
    </div>
  );
}

export default EnrolledCoursePage;
