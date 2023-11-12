import { Sprint } from "../entities";
import { ISprint } from "../@types";
import { dbClient } from "../clients";

class SprintRepository {
    async create(fields:ISprint.Entity){
        const sprint = new Sprint({...fields});
        try {
            await dbClient.sprint.create({
                data:sprint.getData(),
            });
        } catch (error) {
            throw new Error(JSON.stringify(error));
        }
    }
}

export const sprintRepository = new SprintRepository();