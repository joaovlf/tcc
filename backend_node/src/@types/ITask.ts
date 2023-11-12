import { DbClient } from "./db.client";

export type Entity = Omit<DbClient.Task, "uuid"> &  {uuid?:string}

export type Dto = Omit<DbClient.Task, "uuid"> &  {uuid?:string}
