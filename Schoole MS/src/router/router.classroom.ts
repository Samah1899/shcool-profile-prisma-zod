import express from "express";

import validate from '../middellweare/validate'
import { classroomstype } from '../zod.prisma/zod'
import { ClassRoomById, ClassRoomByIdOne, creatClassRoom, getclassrom } from "../controller/classroom.controller";


const router=express.Router();
router.post('/',validate(classroomstype),creatClassRoom)
router.get('/',getclassrom)
router.get('/classRoom/:id',ClassRoomById)
router.get('/OneclassRoom/:id',ClassRoomByIdOne)

export default router;