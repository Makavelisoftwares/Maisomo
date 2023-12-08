import { Prisma } from '@/lib/db';
import { ServerSession } from '@/utils/ServerSession'
import {redirect} from 'next/navigation'

async function DasboardPage() {
  const {user}=await ServerSession();

  if(!user){
    return redirect('/auth/sign-in')
  }

  // CHECKING FOR ROLE
  const User=await Prisma.user.findUnique({
    where:{
      email:user?.email
    }
  })

  if(!User){
    return redirect('/auth/sign-in')
  }

  if(User.role=="NONE"){
    return redirect('/role')
  }

  return (
    <div>DasboardPage</div>
  )
}

export default DasboardPage