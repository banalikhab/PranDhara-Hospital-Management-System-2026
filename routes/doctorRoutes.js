import express from 'express'
import { isAdmin, userAuth } from '../middleware/authMiddleware.js'
import upload from '../middleware/multer.js'
import { addDoctor, deleteDoctor, getAllDoctor, getDoctorDetails, updateDoctor } from '../controllers/doctorController.js'



const router = express.Router()

//Add Doctor || Post
router.post('/add',userAuth,isAdmin, upload.single("image"),addDoctor)

//Get All Doctor || Get
router.get('/get-all',getAllDoctor)

//Doctor Details || Get
router.get('/get-details/:id',getDoctorDetails)

//Update Doctor || Patch
router.patch('/update/:id',userAuth,isAdmin, upload.single("image"),updateDoctor)

//Delete Doctor || Patch
router.delete('/delete/:id',userAuth,isAdmin, deleteDoctor)


export default router