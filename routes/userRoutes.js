import express from "express";
import { updatePassword, updateUser, userLogin, userRegister } from "../controllers/userController.js";
import { userAuth } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";

const router = express()

//Register || Post
router.post('/register',userRegister)

//Login || Post
router.post('/login',userLogin)

//Update Profile || Patch
router.patch('/update/:id',userAuth, upload.single('image'),updateUser)

//Update Password || patch
router.patch('/update-password/:id', userAuth, updatePassword)




export default router