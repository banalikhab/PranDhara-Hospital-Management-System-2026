import express from 'express'
import { createMessage } from '../controllers/webMessageController.js'

const router = express.Router()

//Create Message || Post
router.post("/create",createMessage)





export default router