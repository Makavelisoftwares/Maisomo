import { Prisma } from '@/lib/db';
import { ServerSession } from '@/utils/ServerSession'
import {redirect} from 'next/navigation'
import { InstructorDasboard } from '../_components/Instructor/Dashboard';

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

  const Courses=await Prisma.course.findMany({
    where:{
      userId:User?.id
    }
  })



  if(!User){
    return redirect('/auth/sign-in')
  }

  if(User.role=="NONE"){
    return redirect('/role')
  }

  if(User.role=="STUDENT" && Courses.length == 0){
    return  redirect('/dashboard/search')
  }

  
  return (
    <div>
      <InstructorDasboard/>
    </div>
  )
}

export default DasboardPage