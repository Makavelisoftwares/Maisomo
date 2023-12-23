"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Links = ({ items }) => {
  const pathname = usePathname();
  const newpathname = pathname.split("/");


  return (
    <div>
      {items?.map((item) => (
        <div key={item.name}>
          <Link
            href={item.link}
            className={cn(
              "flex items-center space-x-2 px-2 text-sm text-neutral-500 py-3 dark:text-slate-50 hover:bg-sky-300/10",
              pathname == item.link &&
                "bg-sky-300/30 border-r-2 border-sky-300 text-sky-700" ||
              item.link.includes(newpathname[2]) &&
              "bg-sky-300/30 border-r-2 border-sky-300 text-sky-700",

            )}
          >
            <div className="text-sm">{item.icon}</div>
            <div>{item.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};
