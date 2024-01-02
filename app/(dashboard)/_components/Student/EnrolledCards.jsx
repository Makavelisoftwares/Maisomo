import { Preview } from "@/components/Preview";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Bookmark } from "lucide-react";
import moment from "moment";
import Image from "next/image";
// import { BookMarkIcon } from "./BookmarkIcon";
import { ServerSession } from "@/utils/ServerSession";
import { Prisma } from "@/lib/db";
import { BookMarkIcon } from "../BookmarkIcon";
import Link from "next/link";

export const EnrolledCards = async ({ data }) => {
  const { email } = await ServerSession();
  const User = await Prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  const card = data?.course;

  const GREEN = ["a", "z", "p", "q", "m", "r", "t", "y"];
  const PURPLE = ["l", "b", "s", "v", "c", "d", "g", "h", "w"];
  const BLUE = ["k", "o", "e", "f", "i", "j", "n", "u", "x"];

  return (
    <Card className="col-span-1 dark:bg-[#3f3f3f] rounded-none">
      <CardContent className="p-1 overflow-hidden">
        <div className="mb-2">
          <div className="w-full relative h-[30vh]">
            {card?.image == null ? (
              <Image
                src="/banner.png"
                alt="course"
                fill
                className="object-fill aspect-video"
              />
            ) : (
              "yes image"
            )}
          </div>
        </div>

        <div className="px-4 py-2">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-[35px] h-[35px] rounded-full relative">
              {card?.instructor?.image ? (
                <Avatar>
                  <AvatarImage src={card?.instructor?.image} />
                  <AvatarFallback>{card?.instructor?.name[0]}</AvatarFallback>
                </Avatar>
              ) : (
                <div
                  className={cn(
                    "w-full h-full flex items-center justify-center font-bold text-2xl rounded-full ",
                    BLUE.includes(card?.instructor?.name[0]) &&
                      "bg-blue-500 text-white",
                    PURPLE.includes(card?.instructor?.name[0]) &&
                      "bg-purple-500 text-white",
                    GREEN.includes(card?.instructor?.name[0]) &&
                      "bg-green-500 text-white"
                  )}
                >
                  <div>{card?.instructor?.name[0]}</div>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <div className=" font-bold text-lg ">{card?.title}</div>
              <div className="text-xs text-zinc-400">
                Prof. {card?.instructor?.name}
              </div>
            </div>
          </div>

          <Separator />

          <div className="flex flex-col space-y-1 mb-3">
            <Preview value={`${card?.description.slice(0, 120)}...`} />

            <div className="text-sm text-sky-400">
              <Link href={`/dashboard/enrolled/${card?.id}`}>Learn More ...</Link>
            </div>
          </div>

          <Separator />

          <div className="flex items-center pt-2 justify-between">
            <div className="w-[200px] text-xs h-[10px] rounded-none">
              published on {moment(card?.updatedAt).format("YYYY-MM-DD")}
            </div>
            <BookMarkIcon userId={User?.id} courseId={card?.id} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
