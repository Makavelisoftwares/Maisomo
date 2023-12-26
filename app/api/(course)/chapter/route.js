import { Prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST=async(req)=>{
    const {Video,param,title,content}=await req.json();
    
    try {
        const Chapter=await Prisma.chapter.create({
            data:{
                content:content,
                courseId:param,
                title:title,
                video:Video
            }
        });

        if(!Chapter){
            return NextResponse.json('Failed creating chapter',{status:400});
        }

        return NextResponse.json(`Chapter:${title} successfully saved`,{status:200});

    } catch (error) {
        console.log('FAILED TO CREATE CHAPTER')
    }

}


