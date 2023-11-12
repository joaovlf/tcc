import { hash } from "bcrypt";
import { Request, Response } from "express";
import { userRepository } from "../repositories";
import { dbClient } from "../clients";
import { User } from "../entities";

export class UserController {
    public async list(_: Request, res: Response) {
        try {
            const userList = await userRepository.findMany();
            return res.status(200).json(userList);

        } catch (error) {
            return res.status(500).json({
                message: "erro ao listar usuarios",
                erro: error
            });
        }
    }

    public async create(req: Request, res: Response) {
        const {body} = req;
        const {password, ...rest} = new User(body).getData();

        try {
            const hashPassword = await hash(password, 10);
            await dbClient.user.create({ data: { 
                ...rest,
                password:hashPassword,
                
            }});
            return res.status(200).json({ message: "usuario criado com criado com sucesso" });

        } catch (error) {
            return res.status(500).json({
                message: "erro ao criar usuario",
                erro: error
            });
        }
    }

    public async update(req: Request, res: Response) {
        const { body, params } = req;
        const {uuid} = params;
        try {
            await dbClient.user.update({
                where: { uuid },
                data: { ...body }
            });
            return res.status(200).json({ message: "usuario alterado com sucesso" });
        } catch (error) {
            return res.status(500).json({
                message: "erro ao atualizar usuario",
                erro: error
            });
        }
    }

    public async delete(req: Request, res: Response) {
        const {uuid} = req.params;
        try {
            await dbClient.user.delete({ where: { uuid } });
            return res.status(200).json({ message: "deletado com sucesso" });
        } catch (error) {
            return res.status(500).json({
                message: "erro ao deletar usuario",
                erro: error
            });
        }
    }
}

export const userController = new UserController();