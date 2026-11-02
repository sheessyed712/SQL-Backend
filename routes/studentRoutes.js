import express from 'express';
import {addEntries,updateEntries,deleteEntries} from '../controllers/studentController.js';

const router=express.Router();

router.post("/add",addEntries);

router.put("/update/:id",updateEntries);

//delete
router.delete("/delete/:id",deleteEntries);
export default router;