import courses from "../models/courses";
import Students from "../models/students.js"
const addCourse=async(req,res)=>{
    try {
        const {name}=req.body;
        const course=await courses.create({
            name:name
        })
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json(error.message);
    }
}


export default addCourse;