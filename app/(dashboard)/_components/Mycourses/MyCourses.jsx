import { ServerSession } from "@/utils/ServerSession";
import { columns } from "./Columns";
import { DataTable } from "./Data-table";
import { Prisma } from "@/lib/db";

export const MyCourses = async () => {
  const { email } = await ServerSession();
  const User = await Prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  const courses = await Prisma.course.findMany({
    where: {
      instructorId: User?.id,
    },
    include: {
      category: true,
    },
  });

  // console.log(courses);

  const payments = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
  ];

  return (
    <div className="mt-2">
      <DataTable columns={columns} data={courses} />
    </div>
  );
};
