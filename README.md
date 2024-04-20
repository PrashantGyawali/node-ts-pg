# Project: Students Rest api

A simple rest api created to learn typescript and node with postgres as database.

Note: Change the http:// with https:// if you install ssl certificates for secure protocol.

The complete api documentaion can be found [here](https://documenter.getpostman.com/view/34414853/2sA3BoaXMp)

The smaller version of the documentation can be found below:



## End-point: getAllStudents

Returns all the students in the database

### Method: GET

>``` text
>http://localhost:3000/api/v1/students/
>```

### Response: 200

```json
[
    {
        "id": 1,
        "name": "Joe",
        "email": "joe@gmail.com",
        "age": 24,
        "dob": "2000-01-09T18:15:00.000Z"
    },
    {
        "id": 5,
        "name": "ramu kaka",
        "email": "ramu@gmail.com",
        "age": 21,
        "dob": "2003-01-09T18:15:00.000Z"
    },
    {
        "id": 6,
        "name": "ram bahadur babu",
        "email": "ramubahadurbabu@gmail.com",
        "age": 21,
        "dob": "2003-01-09T18:15:00.000Z"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: getStudentById

Returns the student having certain id

### Method: GET

>``` text
>http://localhost:3000/api/v1/students/:id
>```

### Response: 200

```json
{
    "id": 1,
    "name": "Joe",
    "email": "joe@gmail.com",
    "age": 24,
    "dob": "2000-01-09T18:15:00.000Z"
}
```

### Response: 200

```json
{
    "error": "No student Found"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: addStudent

Add new student data into the database.

``` javascript
type Student={
name:string;
email:string;
age:number;
dob:string;
}
 ```

### Method: POST

>``` text
>http://localhost:3000/api/v1/students/add
>```
### Body (**raw**)

```json
{
   "name":"Harry",
   "email":"harry@gmail.com",
   "age":22,
   "dob":"2002-1-10"
}
```

### Response: 201

```json
{
    "success": "Student added successfully"
}
```

### Response: 400

```json
{
    "error": "Student email already exists"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: deleteStudent

Deletes the student whose id is given in the url path

### Method: DELETE

>```

>http://localhost:3000/api/v1/students/:id
>```

### Response: 201

```json
{
    "success": "Student removed successfully"
}
```

### Response: 400

```json
{
    "error": "Student does not exist"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: updateStudentById

Updates the data of student whose id is given in the url path.
We can change just a single field or any number of fields. (new email must be unique)

### Method: PUT

>``` text
>http://localhost:3000/api/v1/students/:id
>```

### Body (**raw**)

```json
{
    "name":"Ram Babu",
    "email": "rambabu@gmail.com"
}
```

### Response: 201

```json
{
    "success": "Student updated successfully"
}
```

### Response: 400

```json
{
    "error": "Student does not exist"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
