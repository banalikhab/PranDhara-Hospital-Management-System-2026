import express from 'express'
import { createMessage, getAllMessage } from '../controllers/webMessageController.js'

const router = express.Router()

//Create Message || Post
router.post("/create",createMessage)

//Get All Messages || Post
router.post("/get-all",getAllMessage)





export default router