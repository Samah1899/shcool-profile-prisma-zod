import { Request,Response } from "express";
import prisma from "../config/db";


//Add new classrom  
export const creatClassRoom=async(req:Request,res:Response)=>{

    let classrom=req.body
    await prisma.classroom.create({
        data:classrom
    })
    console.log(classrom);
    res.json({"msg":"classRoom created","student":classrom} )

}

//get classrom
export const getclassrom=async(req:Request,res:Response)=>{
    
        let classrom=await prisma.classroom.findMany()
        console.log(classrom);
        res.json({"msg":"get all classRoom","classRoom":classrom} )
}

// classroom by id 

export const ClassRoomById=async(req:Request,res:Response)=>{

    let classrom=await prisma.classroom.findMany({
        where:{
            id:req.params.id
        }
    })
    res.json({"msg":"classRoom by id","classRoom":classrom} )
}

// one classroom by id

export const ClassRoomByIdOne=async(req:Request,res:Response)=>{

    let classrom=await prisma.classroom.findUnique({
        where:{
            id:req.params.id
        }
    })
    if (!classrom){
        res.send("ClassRoom id is invalid")
    }
    else{
        res.json({"msg":"One ClassRoom by Id","teacher":classrom} )
    }
}