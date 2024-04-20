

const getStudents: string='SELECT * FROM students;'

const getStudentById:string='SELECT * FROM students Where id= $1;'

const checkEmailExists="Select * from students where email=$1"

const addStudent=`insert into students (name,email,age,dob) 
values ($1,$2,$3,$4);
`

const removeStudent="delete from students where id=$1"

const updateStudent=""

export default {getStudents,getStudentById,checkEmailExists,addStudent,removeStudent,updateStudent}