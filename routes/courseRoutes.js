import express from "express"

import addCourse from "../models/courses.js"

const router=express.Router();

router.post("/add",addCourse);

export default router;