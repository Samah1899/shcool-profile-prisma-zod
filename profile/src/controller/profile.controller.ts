import { Request,Response } from "express";
import prisma from "../config/db";


//Add new users profile
export const creatUserProfile=async(req:Request,res:Response)=>{

    let userProfile=req.body
    await prisma.profile.create({
        data:userProfile
    })
    console.log(userProfile);
    res.json({"msg":"profile created","profile":userProfile} )

}

//return All users profile

export const allusersprofile=async(req:Request,res:Response)=>{
    
        let userProfile=await prisma.profile.findMany()
        console.log(userProfile);
        res.json({"msg":"all profiles ","profiles":userProfile} )
}

