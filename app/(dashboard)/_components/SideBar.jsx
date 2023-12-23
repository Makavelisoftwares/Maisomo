import { Logo } from "@/components/Logo";
import { SideBarLinks } from "./SideBarLinks";
import { ServerSession } from "@/utils/ServerSession";
import { Prisma } from "@/lib/db";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const SideBar = async () => {
  const { email, image, name } = await ServerSession();

  const User = await Prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return (
    <div className="w-[200px] border-r border-zinc-400/30 fixed h-screen dark:bg-[#3f3f3f] dark:text-slate-50">
      {/* logo */}
      <div className="py-3 flex items-center justify-center border-b border-zinc-400/30">
        <Logo />
      </div>

      <div className="flex h-[90vh] justify-between flex-col">
        <div>
          <SideBarLinks />
        </div>

        <div className="flex items-center space-x-2 px-1 border-t border-zinc-300/30 py-1">
          <div>
            {image ? (
              <Avatar>
                <AvatarImage src={image} alt={name[0]} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
            ) : (
              <div className="h-[30px] font-bold w-[30px] flex items-center justify-center rounded-full text-white bg-rose-500 uppercase">
                {name[0]}
              </div>
            )}
          </div>
          <div>
            <div className="text-sm font-bold">{name}</div>
            <div className="text-xs text-zinc-500">{User?.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
