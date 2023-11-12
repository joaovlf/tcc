import { IUser } from "../@types";

export class User {
    constructor(private data : IUser.Entity){}

    public getData(){
        return this.data;
    }
}
