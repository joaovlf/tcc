import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { userRepository } from "../repositories";

export const authMiddleware = async (req:Request,res:Response,next:NextFunction) => {
    const {authorization} = req.headers;
    if(!authorization) throw new Error("unautorized");

    const validToken = authorization.split("Bearer ")[1];

    const {uuid} = verify(validToken, process.env.JWT_PASS ?? "") as {uuid:string};

    try {
        const user = await  userRepository.findOneById(uuid);
        if(!user)  throw new Error("usuario inexistente");

        req.user = user;

        next();
    } catch (error) {
        throw new Error("erro ao autenticar" + error);
    }

};