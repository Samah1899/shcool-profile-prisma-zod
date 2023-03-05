import express from "express";
import { usertype } from "../zod.prisma/zod";
import validate from "../middelleware/validate";
import { RturnByuseEmail, RturnByuseNamPaa, creatUser, getallusers, updatePass } from "../controller/user.controller";

const router=express.Router();
router.post('/',validate(usertype),creatUser)
router.get('/',getallusers)
router.get ('/passName',RturnByuseNamPaa)
router.get ('/email',RturnByuseEmail)
router.put('/:email',updatePass)

export default router;

