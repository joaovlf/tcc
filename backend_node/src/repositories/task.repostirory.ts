import { IFilters, ITask } from "../@types";
import { dbClient } from "../clients";

class TaskRepository {
    public async create(taskData:ITask.Dto){
        try {
            const task = await dbClient.task.create({data:taskData});
            return task;

        } catch (error) {
            throw new Error(error as string);
        }
    }

    public async delete(uuid:string){
        try {
            await dbClient.task.delete({where:{uuid}});
        } catch (error) {
            throw new Error(error as string);
        }
    }

    public async findOneById(uuid:string):Promise<ITask.Entity | undefined | null>{
        try {
            const task = await dbClient.task.findUnique({where:{uuid}});
            return task;
            
        } catch (error) {
            throw new Error(error as string); 
        }
    }
    
    public async findMany(filter?:IFilters.GenericFilter ):Promise<ITask.Entity[] | undefined | null>{
        try {    
            const task = filter 
                ? 
                await dbClient.task.findMany({where:{[filter.field] : filter.value} })
                :
                await dbClient.task.findMany()
                ;
            return task;
        
            
        } catch (error) {
            throw new Error(error as string); 
        }
    }
}

export const taskRepository = new TaskRepository();
