import { Request, Response } from "express";
import { Task } from "../entities";
import { taskRepository } from "../repositories";

export class TaskController {
    public async create(req:Request, res:Response){
        const { body } = req;
        const task = new Task(body);
        const response = await taskRepository.create(task.getData());
        return res.status(200).json(response);
    }

    public async list(_:Request, res:Response){
        const taskList = await taskRepository.findMany();
        return res.status(200).json(taskList);
    }

    public async listByProjectUuid(req:Request, res:Response){
        const { projectUuid } = req.params;
        if(projectUuid){
            const taskList = await taskRepository.findMany({field:"projectUuid", value:projectUuid});
            return res.status(200).json(taskList);
        }
    }

    public async delete(req:Request, res:Response){
        const { uuid } = req.params;
        await taskRepository.delete(uuid);
        return res.status(204).send();
    }
}


export const taskController = new TaskController();