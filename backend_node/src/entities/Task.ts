import { ITask } from "../@types";

export class Task {
    constructor(private data :ITask.Entity){}

    public getData(){
        return {...this.data};
    }
}