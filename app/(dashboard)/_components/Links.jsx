"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Links = ({ items }) => {
  const pathname = usePathname();

  return (
    <div>
      {items?.map((item) => (
        <div key={item.name}>
          <Link
            href={item.link}
            className={cn(
              "flex items-center space-x-2 px-2  py-3 hover:bg-sky-300/10",
              pathname == item.link &&
                "bg-sky-300/30 border-l-4 border-sky-300 text-sky-700"
            )}
          >
            <div>{item.icon}</div>
            <div>{item.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};
