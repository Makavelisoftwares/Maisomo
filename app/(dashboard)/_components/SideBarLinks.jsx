import { Prisma } from "@/lib/db";
import { ServerSession } from "@/utils/ServerSession";
import {
  BookPlus,
  BookmarkPlus,
  LayoutDashboard,
  Loader2,
  Search,
  Settings,
} from "lucide-react";
import { Links } from "./Links";

export const SideBarLinks = async () => {
  const { email } = await ServerSession();

  const studentlinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      name: "Browse",
      link: "/dashboard/search",
      icon: <Search />,
    },
    {
      name: "Settings",
      link: "/dashboard/settings",
      icon: <Settings />,
    },
  ];

  const instructorlinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      name: "Browse",
      link: "/dashboard/search",
      icon: <Search />,
    },
    {
      name: "My Courses",
      link: "/dashboard/courses",
      icon: <BookmarkPlus />,
    },
    {
      name: "Create Course",
      link: "/dashboard/new",
      icon: <BookPlus />,
    },
    {
      name: "Settings",
      link: "/dashboard/settings",
      icon: <Settings />,
    },
  ];

  const administratorlinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      name: "Browse",
      link: "/dashboard/search",
      icon: <Search />,
    },
    {
      name: "Settings",
      link: "/dashboard/settings",
      icon: <Settings />,
    },
  ];

  const User = await Prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (User?.role == "INSTRUCTOR") {
    return (
      <div>
        <Links items={instructorlinks} />
      </div>
    );
  }

  if (User?.role == "STUDENT") {
    return (
      <div>
        <Links items={studentlinks} />
      </div>
    );
  }

  if (User?.role == "ADMINISTRATOR") {
    return (
      <div>
        <Links items={administratorlinks} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Loader2 className="animate-spin" />
    </div>
  );
};
