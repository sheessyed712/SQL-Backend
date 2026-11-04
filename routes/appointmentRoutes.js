import express from 'express';

import {addUser,getUsers,deleteUser} from '../controllers/appointmentController.js';

const router=express.Router();

router.post("/",addUser);
router.get("/",getUsers);
router.delete("/:id",deleteUser);
export default router;