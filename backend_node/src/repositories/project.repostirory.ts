import {  IProject, IFilters } from "../@types";
import { dbClient } from "../clients";

class ProjectRepository {
    public async create(projectData:IProject.Dto){
        const {data, users} = projectData;
        try {
            const project = await dbClient.project.create({
                include:{
                    users:true
                },
                data:{
                    ...data,
                    users:{
                        connect:users
                    }
                },
            
            });
            return project;

        } catch (error) {
            throw new Error(error as string);
        }
    }

    public async delete(uuid:string){
        console.log("entoru no delete",uuid);
        try {
            await dbClient.project.delete({where:{uuid}});
        } catch (error) {
            throw new Error(error as string);
        }
    }

    public async findOneById(uuid:string):Promise<IProject.Entity | undefined | null>{
        try {
            const project = await dbClient.project.findUnique({where:{uuid}});
            return project;
            
        } catch (error) {
            throw new Error(error as string); 
        }
    }
    
    public async findMany(filter?: IFilters.GenericFilter ):Promise<IProject.Entity[] | undefined | null>{
        try {
            const project =
            filter ? 
                await dbClient.project.findMany(
                    {
                        where:{[filter.field]:filter.value},
                        include:{sprints:true, users:true}
                    }) 
                :
                await dbClient.project.findMany()
            ;
            return project;
            
        } catch (error) {
            throw new Error(error as string); 
        }
    }
}

export const projectRepository = new ProjectRepository();
