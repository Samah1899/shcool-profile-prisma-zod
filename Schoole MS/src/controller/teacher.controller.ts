import { Request,Response } from "express";
import prisma from "../config/db";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";



//Add teacher 
export const creatteacher=async(req:Request,res:Response)=>{

    let teachers=req.body
    await prisma.teacher.create({
        data:teachers
    })
    console.log(teachers);
    res.json({"msg":"user teachers","teachers":teachers} )

}

//get teacher 
export const getteacher=async(req:Request,res:Response)=>{
    
        let teachers=await prisma.teacher.findMany()
        console.log(teachers);
        res.json({"msg":"get teachers","teachers":teachers} )
}

//teacher by id 
export const getteacherbyid=async(req:Request,res:Response)=>{
    
        let teacher=await prisma.teacher.findMany({
            where:{
                id:req.params.id
            }
        })
        console.log(teacher);
        res.json({"msg":"get teacher by id","teacher":teacher} )
}

//one teacher by id 
export const getoneteacher=async(req:Request,res:Response)=>{
    
        let teachers=await prisma.teacher.findUnique({
            where:{
                id:req.params.id
            }
        })
        if (!teachers){
            res.send("Teacher id is invalid")
        }
        else{
            res.json({"msg":"One Teacher by Id","teacher":teachers} )
        }
}

