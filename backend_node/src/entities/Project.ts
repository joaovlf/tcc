import { IProject } from "../@types";

export class Project {
    constructor(private  data:IProject.Entity){}

    public getData(){
        return this.data;
    }
}