import { DbClient } from "./db.client";

export type Entity  = Omit<DbClient.Project, "uuid"> &  {uuid?:string}

export type Dto = {
    data:Entity,
    users?:{uuid:string}[];
} 