import express from "express";
import { userLogin, userRegister } from "../controllers/userController.js";

const router = express()

//Register||Post
router.post('/register',userRegister)

//Login||Post
router.post('/login',userLogin)

export default router