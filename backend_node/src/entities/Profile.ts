import { IProfile } from "../@types";

export class Profile {
    constructor(private  data:IProfile.Entity){}

    public getData(){
        return this.data;
    }
}