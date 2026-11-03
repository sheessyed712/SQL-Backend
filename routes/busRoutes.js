import express from 'express';

import {addBus,getAvailableBuses} from '../controllers/busController.js';

const router=express.Router();
router.post("/add",addBus);
router.get("/available/:seats",getAvailableBuses);

export default router;
