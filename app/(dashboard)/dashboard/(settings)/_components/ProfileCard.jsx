import { ServerSession } from "@/utils/ServerSession";
import { ProfileNames } from "./ProfileNames";
import { ProfilePassword } from "./ProfilePassword";
import { Prisma } from "@/lib/db";

export const ProfileCard = async () => {
  const {email}=await ServerSession();

  const User=await Prisma.user.findUnique({
    where:{
      email
    }
  });


  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-3">
        <ProfileNames className='col-span-1' />
        <ProfilePassword className='col-span-1'/>
      </div>
    </div>
  );
};
