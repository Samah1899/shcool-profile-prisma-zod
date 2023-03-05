import { Request,Response } from "express";
import prisma from "../config/db";


//Add new users 
export const creatUser=async(req:Request,res:Response)=>{

    let users=req.body
    await prisma.user.create({
        data:users
    })
    console.log(users);
    res.json({"msg":"user created","users":users} )

}

//return All users

export const getallusers=async(req:Request,res:Response)=>{
    
        let users=await prisma.user.findMany()
        console.log(users);
        res.json({"msg":"all user","users":users} )
}

//return by username and password

export const RturnByuseNamPaa = async (req:Request, res:Response)=>{
    try{
        
     let {username, password} = req.body
     let userProfile = await prisma.user.findMany({
        where:{
            username,
            password
        },
        select:{
            username:true,
            email:true,
            password:false,
            Birthday:true,
            phoneNumber:true,
            profiles:{
                select:{
              userId:true,
              DateJoin:true  
            }  
        }
     }})
     if(!userProfile){
         res.json('The username or Password is incorrect')
    }else{
        res.json({'msg':'your name and password correct',userProfile})
     }
    }catch(e){
        console.log(e)
    }
}

//return by email

export const RturnByuseEmail = async (req:Request, res:Response)=>{
    try{
        
     let {email} = req.body
     let userProfile = await prisma.user.findMany({
        where:{
            email, 
        },
        select:{
            username:true,
            email:true,
            password:false,
            Birthday:true,
            phoneNumber:true,
         }
        })
     if(!userProfile){
         res.json('The Email is incorrect')
    }else{
        res.json(userProfile)
     }
    }catch(e){
        console.log(e)
    }
}

//update

export const updatePass = async (req:Request, res:Response)=>{
    try{
        
     let  {email} = req.params
     let updated = req.body
     let userProfile = await prisma.user.update({
        where:{
           email
        },
        data: updated,
        select:{
        
            profiles:{
                select:{
              userId:true,
              DateJoin:true
            }
        }
        
     }})
     if(userProfile){
         res.json({'msg':'User Updated Successfully',userProfile})
    }else{
        res.json(userProfile)
     }
    }catch(e){
        console.log(e)
    }
}




