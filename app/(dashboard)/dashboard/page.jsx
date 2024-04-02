import { Prisma } from "@/lib/db";
import { ServerSession } from "@/utils/ServerSession";
import { redirect } from "next/navigation";
import { InstructorDasboard } from "../_components/Instructor/Dashboard";
import { StudentDashboard } from "../_components/Student/StudentDashboard";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function DasboardPage() {
  const { user } = await ServerSession();

  if (!user) {
    return redirect("/auth/sign-in");
  }

  // CHECKING FOR ROLE
  const User = await Prisma.user.findUnique({
    where: {
      email: user?.email,
    },
  });

  const Courses = await Prisma.course.findMany({
    where: {
      instructorId: User?.id,
    },
  });

  const enrollments = await Prisma.enrollment.findMany({
    where: {
      studentId: User?.id,
    },
    include: {
      course: {
        include: {
          instructor: true,
          chapters: true,
        },
      },
    },
  });

  if (!User) {
    return redirect("/auth/sign-in");
  }

  if (User.role == "NONE") {
    return redirect("/role");
  }

  if (User.role == "STUDENT" && enrollments.length == 0) {
    return redirect("/dashboard/search");
  }

  if (User.role == "STUDENT" && enrollments.length > 0) {
    return (
      <div>
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle>My Enrollments</CardTitle>
            <CardDescription>
              You have successfully enrolled to
              <span className="mx-1 font-bold text-black">
                {enrollments.length}
              </span>
              courses
            </CardDescription>
          </CardHeader>
        </Card>
        <StudentDashboard enrols={enrollments} />
      </div>
    );
  }

  return (
    <div>
      <InstructorDasboard enrols={enrollments} />
    </div>
  );
}

export default DasboardPage;
