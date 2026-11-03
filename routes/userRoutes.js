import express from 'express';
import {addUser,getUsers} from '../controllers/userController.js';

const router=express.Router();

router.post("/add",addUser);
router.get("/get",getUsers);


export default router;