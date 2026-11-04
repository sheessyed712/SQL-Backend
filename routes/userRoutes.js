import express from 'express';
import {addUser,getUsers} from '../controllers/userController.js';
import { getUserBookings } from '../controllers/associationController.js';
const router=express.Router();

router.post("/",addUser);
router.get("/",getUsers);

router.get("/:id/bookings",getUserBookings)


export default router;