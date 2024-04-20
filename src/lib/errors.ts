import {type Response } from "express";

function InternalError(res:Response)
{
    res.status(500).json({error:"Internal Server Error"})
}

export {InternalError}