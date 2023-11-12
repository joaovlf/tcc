import { DbClient } from "./db.client";

export interface Entity extends Omit<DbClient.Sprint, "uuid"> {
    uuid?:string;
} 