import { Request,Response } from "express";
import prisma from "../config/db";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";



//Add student 
export const creatstudent=async(req:Request,res:Response)=>{

    let students=req.body
    await prisma.student.create({
        data:students
    })
    console.log(students);
    res.json({"msg":"user created","users":students} )

}

//get student
export const getstudents=async(req:Request,res:Response)=>{
    
        let students=await prisma.student.findMany()
        console.log(students);
        res.json({"msg":"get all user","users":students} )
}

//get student By Id 
export const StudentId=async(req:Request,res:Response)=>{
    let {id}=req.params;
    let student=await prisma.student.findMany({
        where:{
            id
        }
    })
    res.json({"msg":"student by Id","student":student} )
}
//get student By Id return One  
export const OneStudentId=async(req:Request,res:Response)=>{
    
     let {id}=req.params;
    let student=await prisma.student.findUnique({
        where:{
           id
        }
    })
    if (!student){
        res.send("student id is invalid")
    }
    else{
        res.json({"msg":"One student by Id","student":student} )
    }  
}

