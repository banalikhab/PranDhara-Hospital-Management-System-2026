import express from "express";
import { updateUser, userLogin, userRegister } from "../controllers/userController.js";
import { userAuth } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";

const router = express()

//Register || Post
router.post('/register',userRegister)

//Login || Post
router.post('/login',userLogin)

//Update Profile || Patch
router.patch('/update/:id',userAuth, upload.single('image'),updateUser)
export default router