import { Request, Response } from "express";
import { Project } from "../entities";
import { projectRepository } from "../repositories";

export class ProjectController {
    public async create(req:Request, res:Response){
        const { body } = req;
        const project = new Project(body);
        const users = body.users.map((uuid:string)=>({uuid}));
        const response = await projectRepository.create({data:project.getData(), users});
        return res.status(200).json(response);
    }

    public async list(_:Request, res:Response){
        const projectList = await projectRepository.findMany();
        return res.status(200).json(projectList);
    }
    public async listByUser(req:Request, res:Response){
        const projectList = await projectRepository.findMany();
        return res.status(200).json(projectList);
    }

    public async delete(req:Request, res:Response){
        const { uuid } = req.params;
        await projectRepository.delete(uuid);
        return res.status(204).send();
    }
}


export const projectController = new ProjectController();