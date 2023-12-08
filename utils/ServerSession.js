import { getServerSession } from "next-auth"
import { AuthOptions } from "./AuthOptions"

export const ServerSession=async()=>{
    const UserWithServerSession=await getServerSession(AuthOptions);
     return {
        user:UserWithServerSession?.user,
        email:UserWithServerSession?.user?.email,
        image:UserWithServerSession?.user?.image,
        name:UserWithServerSession?.user?.name
     }

}