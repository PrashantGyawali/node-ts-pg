import express, { urlencoded,json, type Express } from "express";
import "dotenv/config";
import client from "./DB/db.js";
import studentRouter from "./routes/studentRoutes.js";


const app:Express = express();
app.use(urlencoded({extended:true}));
app.use(json());




app.use("/api/v1/students",studentRouter);

const port=(process.env.PORT || 3000) as number;

const newClient = client;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.get("/", (_req, res) => {
    res.send("Hello World"); 
    
});    