import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

interface Payload{
    sub: string;
}
export function isAuthenticated(
    res: Response, 
    req: Request,
    next: NextFunction,
){
    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).end()
    }

    console.log(authToken)
}
