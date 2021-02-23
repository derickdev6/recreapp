import { Space } from "./Space";

export class User{
    private id:number;
    private email:string;
    private username:string;
    private password:string;
    private age?:number;

    constructor(id:number, email:string, username:string, password:string, age?:number){
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        if(age)this.age = age;
    }

    get Id(){ return this.id}
    get Email(){ return this.email}
    get Username(){ return this.username}
    get Password(){ return this.password}
    get Age(){ return this.age}

    getInSpace(space:Space){
        space.addOcupant(this);
    }
}