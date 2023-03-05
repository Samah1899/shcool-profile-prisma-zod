import {z,TypeOf}from 'zod'

export const usertype=z.object({

    body:z.object({
        username:z.string({required_error:"pleas write your name"}).min(3,"Write your name more than 3 char"),
        password:z.string({required_error:"pleas write the password"})
        .max(8,"Write your password more than 8 char"),
        email:z.string({required_error:"pleas write your email"}).email(),
    })
    
})

export type teacherstypes = TypeOf<typeof usertype> ["body"];

