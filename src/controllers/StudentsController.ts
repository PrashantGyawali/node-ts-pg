import e, { type Request, type Response } from 'express';
import pool from '../DB/db.js';
import { type Student } from '../lib/types.js';
import queries from '../DB/queries.js'
import { InternalError } from '../lib/errors.js';



async function getStudents(_req: Request, res: Response) {
    pool.then(async (db) => {
        db.query(queries.getStudents, (err, results) => {
            if (err) {
                console.error(err);
                InternalError(res);
            }
            else {
                let students: Student[] = results.rows as Student[];
                res.status(200).json(students);
            }
        });
    })
}



function getStudentById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    pool.then(async (db) => {
        db.query(queries.getStudentById, [id], (err, results) => {
            if (err) {
                console.error(err);
                InternalError(res);
            }
            else {
                let student: Student = results.rows[0];
                if (!student) res.status(200).json({ error: "No student Found" })
                res.status(200).json(student);
            }
        })
    })
    return
}


function addStudent(req: Request, res: Response) {
    try {
        const student: Student = req.body;
        if (!student) {
            console.log("No body with request")
            res.json({ error: "No body found with the request" })
            return
        }
        const { name, email, age, dob } = student
        pool.then(async (db) => {
            db.query(queries.checkEmailExists, [email], (err, results) => {
                if (results.rows.length > 0) {
                    res.status(400).json({ error: "Student email already exists" })
                    return
                }

                db.query(queries.addStudent, [student.name, student.email, student.age, student.dob], (err, results) => {
                    if (err) {
                        console.error(err);
                        InternalError(res)
                        return;
                    }
                });
                res.status(201).json({ success: "Student added successfully" });
                return
            }
            )
        }
        )
    }
    catch (err) {
        console.log(err)
        InternalError(res)
    }
}

function removeStudent(req: Request, res: Response) {
    try {
        const studentId: number = parseInt(req.params.id);
        pool.then(async (db) => {

            db.query(queries.getStudentById, [studentId], (err, results) => {

                if (err) {
                    InternalError(res)
                }
                if (results.rows.length == 0) {
                    res.status(400).json({ error: "Student does not exist" })
                    return
                }
                else{
                    db.query(queries.removeStudent, [studentId], (err, results) => {
                        if (err) {
                            InternalError(res);
                            return
                        }
                        res.status(201).json({ success: "Student removed successfully" });
                        return
                    }
                    )
                }
            })
        }
        )
    }
    catch (err) {
        InternalError(res);
        return;
    }

}






function updateStudent(req: Request, res: Response) {

    try{
        const id:number=parseInt(req.params.id);

        const studentData:Partial<Student>=req.body;

        let queryClause=Object.keys(studentData).map((key,index)=>`${key}=$${index+1}`).join(',');

        const query={
            text:`update students set ${queryClause} where id=$${Object.keys(studentData).length+1}`,
            values:[...Object.values(studentData),id]
        }

        pool.then(async (db)=>{
            db.query(queries.getStudentById,[id],(err,result)=>{
                if(err)
                {
                    InternalError(res);
                    return
                }
                if(result.rows.length==0)
                {
                    res.status(400).json({error:"Student does not exist"});
                    return
                }
                else{
                    db.query(queries.checkEmailExists,[studentData.email],(err,result)=>{

                        err && InternalError(res);
                        if(result.rows.length>0 && result?.rows[0]?.id!=id)
                        {
                            res.status(400).json({error:"Email already exists"});
                            return
                        }
                        db.query(query,(err,_result)=>{
                            if(err)
                                {
                                    InternalError(res);
                                    return
                                }
                                res.status(201).json({success:"Student updated successfully"});
                                return
                            })
                    })
                }
            })
        })

    }
    catch(err)
    {
        InternalError(res);
        return
    }
}



export { getStudents, getStudentById, addStudent, removeStudent,updateStudent }