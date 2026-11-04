import express from 'express';

import {addBus,getAvailableBuses} from '../controllers/busController.js';
import { getBusBookings } from '../controllers/associationController.js';

const router=express.Router();
router.post("/",addBus);
router.get("/available/:seats",getAvailableBuses);


router.get("/:id/bookings",getBusBookings)
export default router;
