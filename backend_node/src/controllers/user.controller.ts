import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class UserController {
    public async list(_: Request, res: Response) {
        try {
            const userList = await prisma.user.findMany();
            return res.status(200).json(userList);

        } catch (error) {
            return res.status(500).json({
                message: "erro ao listar usuarios",
                erro: error
            });
        }
    }

    public async create(req: Request, res: Response) {
        const { name, email, password, userName} = req.body;
        try {
            const hashPassword = await hash(password, 10);
            await prisma.user.create({ data: { 
                name,
                email,
                password:hashPassword,
                userName
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
            await prisma.user.update({
                where: { uuid },
                data: { ...body }
            });
            return res.status(200).json({ message: "deletado com sucesso" });
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
            await prisma.user.delete({ where: { uuid } });
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