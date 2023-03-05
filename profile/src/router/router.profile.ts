import express from "express";
import { allusersprofile, creatUserProfile } from "../controller/profile.controller";

const router=express.Router();
router.post('/createProfile',creatUserProfile)
router.get('/',allusersprofile)


export default router;