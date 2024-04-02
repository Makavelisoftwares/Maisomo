import { Banner } from "@/app/(dashboard)/_components/Banner";
import { Cards } from "@/app/(dashboard)/_components/Cards";
import { Categories } from "@/app/(dashboard)/_components/Categories";
import { Prisma } from "@/lib/db";
import { ServerSession } from "@/utils/ServerSession";
import React from "react";

async function BrowsePage() {
  const { email } = await ServerSession();
  const User = await Prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  const Courses = await Prisma.course.findMany({
    where: {
      published: true,
      NOT: {
        instructorId: User?.id,
      },
    },
    include: {
      category: true,
      instructor: true,
      chapters: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  const Category = await Prisma.category.findMany();

  return (
    <div>
      <Categories courses={Courses} data={Category} />
      <Cards data={Courses} />
    </div>
  );
}

export default BrowsePage;
