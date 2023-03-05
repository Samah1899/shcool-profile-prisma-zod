import express from "express";

import validate from '../middellweare/validate'
import { studenttype } from '../zod.prisma/zod'
import { OneStudentId, StudentId, creatstudent, getstudents } from "../controller/student.controller";


const router=express.Router();
router.post('/',validate(studenttype),creatstudent)
router.get('/',getstudents)
router.get('/allStudent/:id',StudentId)
router.get('/oneStudent/:id',OneStudentId)

export default router;

