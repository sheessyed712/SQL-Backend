import express from 'express';
import {addEntries,updateEntries,deleteEntries,getAllEntries,getEntryById,addingValuesToStudentandIdCard} from '../controllers/studentController.js';

const router=express.Router();

router.post("/add",addEntries);
router.get("/",getAllEntries);
router.get("/:id",getEntryById);
router.put("/update/:id",updateEntries);

router.post("/addStudentandIdCard",addingValuesToStudentandIdCard);

//delete
router.delete("/delete/:id",deleteEntries);
export default router;