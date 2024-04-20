import { Router } from "express";
import { getStudents,getStudentById,addStudent, removeStudent,updateStudent } from "../controllers/StudentsController.js";

const studentRouter= Router();

studentRouter.get("/",getStudents)
studentRouter.get("/:id",getStudentById);
studentRouter.post("/add",addStudent)
studentRouter.delete("/:id",removeStudent);
studentRouter.put("/:id",updateStudent);

export default studentRouter;