import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Bookmark } from "lucide-react";
import Image from "next/image";

export const Cards = () => {
  const cards = [1, 2, 3, 4, 5, 4, 44, 49, 483];
  const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, est magnam repudiandae odio nobis reiciendis necessitatibus quidem mollitia recusandae aliquid ex nihil sapiente tenetur. Eius molestias nulla dignissimos nisi! Enim perferendis eius magni saepe? Officia in libero sed, quaerat dolores, repudiandae consequatur dignissimos dolorum omnis nesciunt aspernatur, itaque ullam. Aut, omnis perspiciatis. Eos, suscipit hic?  ";

  return (
    <div className="grid grid-cols-3 gap-3">
      {cards.map((card, i) => (
        <Card className="col-span-1 rounded-none" key={i}>
          <CardContent className="p-1 overflow-hidden">
            <div className="mb-2">
              <div className="w-full relative h-[30vh]">
                <Image
                  src="/banner.png"
                  alt="course"
                  fill
                  className="object-fill aspect-video"
                />
              </div>
            </div>

            <div className="px-4 py-2">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-[35px] h-[35px] rounded-full relative">
                  <Image
                    src="/banner.png"
                    className="object-fill rounded-full aspect-video"
                    fill
                  />
                </div>
                <div className="flex flex-col">
                  <div className=" font-bold text-lg ">Web Development</div>
                  <div className="text-xs text-zinc-400">Prof. Alan Omar</div>
                </div>
              </div>

              <Separator/>

              <div className="flex flex-col space-y-1 mb-3">
                {text.slice(0, 130)}...
              </div>

              <Separator/>

              <div className="flex items-center pt-2 justify-between">
                <div className="w-[200px] text-xs h-[10px] rounded-none">
                  published on 12/12/2024
                </div>
                <Bookmark className="w-[30px] h-[30px] rounded-none" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
