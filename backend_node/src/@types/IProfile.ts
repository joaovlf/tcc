import { DbClient } from "./db.client";

export type Entity  = Omit<DbClient.Profile, "uuid"> &  {uuid?:string}

export type Dto = {
    data:Entity,
    users?:{uuid:string}[];
} 