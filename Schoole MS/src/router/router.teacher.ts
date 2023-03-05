import express from "express";

import validate from '../middellweare/validate'
import {teachertype } from '../zod.prisma/zod'
import { creatteacher, getoneteacher, getteacher, getteacherbyid } from "../controller/teacher.controller";


const router=express.Router();
router.post('/',validate(teachertype),creatteacher)
router.get('/',getteacher)
router.get('/allteachers/:id',getteacherbyid)
router.get('/oneteache/:id',getoneteacher)

export default router;