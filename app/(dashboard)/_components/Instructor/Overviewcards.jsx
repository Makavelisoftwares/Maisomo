import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookMarked, BookOpen, UserPlus, Users } from "lucide-react";

export const Overviewcard = () => {
  const cards = [
    {
      title: "Total studens",
      number: 200,
      icon: <Users className="text-emerald-700" />,
      styles: "bg-gradient-to-br from-emerald-700 to-white",
    },
    {
      title: "Total courses",
      number: 30,
      icon: <BookOpen className="text-rose-700" />,
      styles: "bg-gradient-to-br from-rose-700 to-white",
    },
    {
      title: "Total Enrols",
      number: 3282,
      icon: <UserPlus className="text-sky-700" />,
      styles: "bg-gradient-to-br from-sky-700 to-white",
    },
    {
      title: "Active courses",
      number: 200,
      icon: <BookMarked className="text-black" />,
      styles: "bg-gradient-to-br from-black to-white",
    },
  ];

  return (
    <div className="grid grid-cols-4 mt-4 gap-3">
      {cards.map((a, index) => (
        <Card className={`${a.styles}  text-white col-span-1 p-3`} key={index}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardDescription className="text-white">
                {a.title}
              </CardDescription>
              <CardTitle>{a.number}</CardTitle>
            </div>

            <div className="h-[40px] w-[40px] rounded-full bg-white  flex items-center justify-center">
              {a.icon}
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};
