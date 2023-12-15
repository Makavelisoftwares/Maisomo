import { Banner } from "@/app/(dashboard)/_components/Banner";
import { Cards } from "@/app/(dashboard)/_components/Cards";
import { Categories } from "@/app/(dashboard)/_components/Categories";
import { Prisma } from "@/lib/db";
import React from "react";

async function BrowsePage() {
  const Courses = await Prisma.course.findMany();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      <Banner />
      <Categories />
      <Cards />
    </div>
  );
}

export default BrowsePage;
