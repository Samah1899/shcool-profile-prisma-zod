import express,{Application} from "express";
import UserstRouter from './router/router.user'
import profileRouter from './router/router.profile'
import {connectDB} from '../src/config/db'

const app:Application=express()
const PORT:Number=3000
connectDB()
app.use(express.json())
app.use('/users',UserstRouter)
app.use('/profiles', profileRouter)


app.listen(PORT,()=>{console.log("express listening on port "+PORT)})