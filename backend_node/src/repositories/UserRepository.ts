import { PrismaClient, User, Prisma } from "@prisma/client";


const prisma = new PrismaClient();
type filterType = Prisma.UserWhereUniqueInput 
class UserRepository {
    public async findOneByEmail(email:string):Promise<User | undefined | null>{
        try {
            const user = await prisma.user.findUnique({where:{email}});
            return user;
            
        } catch (error) {
            throw new Error(error as string); 
        }
    }
    public async findOneById(uuid:string):Promise<User | undefined | null>{
        try {
            const user = await prisma.user.findUnique({where:{uuid}});
            return user;
            
        } catch (error) {
            throw new Error(error as string); 
        }
    }
    
    public async findMany(filter: filterType ):Promise<User | undefined | null>{
        try {
            const user = await prisma.user.findUnique({where:filter });
            return user;
            
        } catch (error) {
            throw new Error(error as string); 
        }
    }
}

const userRepository = new UserRepository();

export {userRepository};