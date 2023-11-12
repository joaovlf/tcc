import { IUser } from "../@types";
import { dbClient } from "../clients";

class UserRepository {
    public async findOneByEmail(email:string):Promise<IUser.Entity | undefined | null>{
        try {
            const user = await dbClient.user.findUnique({where:{email}});
            return user;
            
        } catch (error) {
            throw new Error(error as string); 
        }
    }
    public async findOneById(uuid:string):Promise<IUser.Entity | undefined | null>{
        try {
            const user = await dbClient.user.findUnique({where:{uuid}});
            return user;
            
        } catch (error) {
            throw new Error(error as string); 
        }
    }
    
    public async findMany():Promise<IUser.Entity[] | undefined | null>{
        try {
            const user = await dbClient.user.findMany();
            return user;
            
        } catch (error) {
            throw new Error(error as string); 
        }
    }
}

const userRepository = new UserRepository();

export {userRepository};