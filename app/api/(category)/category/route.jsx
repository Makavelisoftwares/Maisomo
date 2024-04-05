import { Prisma } from "@/lib/db"
import { NextResponse } from "next/server";

export const dynamic="force-dynamic"

export const GET=async(req)=>{
    try {
        const Categories= await Prisma.category.findMany();
        return NextResponse.json(Categories,{status:200})
    } catch (error) {
        console.log('FAILED FETCHING CATEGORY-- SERVER')
    }
}