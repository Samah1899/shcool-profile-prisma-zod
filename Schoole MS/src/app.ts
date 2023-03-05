import express,{Application} from "express";
import studentRouter from './router/router.student'
import teacherRouter from './router/router.teacher'
import classroomRouter from './router/router.classroom'

import {connectDB} from '../src/config/db'

const app:Application=express()
const PORT:Number=3009
connectDB()
app.use(express.json())
app.use('/student',studentRouter)
app.use('/teacher',teacherRouter)
app.use('/classroom',classroomRouter)

app.listen(PORT,()=>{console.log("express listening on port "+PORT)})