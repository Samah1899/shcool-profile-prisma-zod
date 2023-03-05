import {z,TypeOf}from 'zod'

export const studenttype=z.object({

    body:z.object({
        name:z.string({required_error:"pleas write your name"}),
        age:z.number({required_error:"pleas write the age"}),
        major:z.string({required_error:"pleas write your major"}),
    })
    
})

export const teachertype=z.object({

    body:z.object({
        name:z.string({required_error:"pleas write your name"}), 
    })   
})

export const classroomstype=z.object({

    body:z.object({
        name:z.string({required_error:"pleas write your name"}),    
    })
})



export type teacherstypes = TypeOf<typeof teachertype> ["body"];

export type classroomstypes = TypeOf<typeof classroomstype> ["body"];

export type studentstypes = TypeOf<typeof studenttype> ["body"];
