"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const UnitsSideBar = ({ chapters }) => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <div>
      <div className="text-lg font-bold">Chapters</div>
      {chapters.map((chap, index) => (
        <div
          key={index}
          className="px-1 py-3 flex items-center justify-between bg-sky-100 text-sky-700 border border-zinc-400/30 rounded-md mt-2"
        >
          <div>{chap?.title}</div>
          <div>
            <Button variant="ghost" className='bg-inherit hover:bg-inherit hover:text-inherit' asChild>
              <Link href={`${pathname}/chapter/${chap?.id}`}>
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
