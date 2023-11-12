import { ISprint } from "../@types";

export class Sprint {
    constructor(private data : ISprint.Entity){}

    public getData(){
        return this.data;
    }
}