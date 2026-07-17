import express from 'express'
import { isAdmin, userAuth } from '../middleware/authMiddleware.js'
import upload from '../middleware/multer.js'
import { addDoctor } from '../controllers/doctorController.js'



const router = express.Router()

//Add Doctor || Post
router.post('/add',userAuth,isAdmin, upload.single("image"),addDoctor)

export default router