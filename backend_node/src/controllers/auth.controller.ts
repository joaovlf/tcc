import { Request, Response } from "express";
import { userRepository } from "../repositories/UserRepository";
import {sign, verify} from "jsonwebtoken";
import { compare } from "bcrypt";

export class AuthController {
    public async authenticate(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            const user = await userRepository.findOneByEmail(email);
            if(!user) throw new Error("email ou senha inválidos");

            const verifyPassword = await compare(password, user.password);
            if(!verifyPassword)  throw new Error("email ou senha inválidos");

            const token = sign({uuid:user.uuid}, process.env.JWT_PASS ?? "",  {expiresIn:"3h"} );
            return res.status(200).header(  {authorization:"Bearer "  +  token}).json({message:"usuario authenticado com sucesso"});

        } catch (error) {
            return res.status(500).json({
                message: "erro ao listar usuario",
                erro: error
            });
        }
    }
    
    public async verifyAuthentication (req:Request, res:Response){
        const {authorization} = req.headers;
        if(!authorization) throw new Error("unautorized");

        const validToken = authorization.split("Bearer ")[1];

        const {uuid} = verify(validToken, process.env.JWT_PASS ?? "") as {uuid:string};

        try {
            const user = await  userRepository.findOneById(uuid);
            return res.status(user ? 200 : 500);
        } catch (error) {
            throw new Error("erro ao autenticar" + error);
        }

    }
}

export const authController = new AuthController();