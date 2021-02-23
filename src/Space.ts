import { User } from "./User";

export class Space {
    private id: number;
    private name: string;
    private size: number;
    private description: string = "";
    private occupants: User[];

    constructor(id: number, name: string, size: number, description?: string) {
        this.id = id;
        this.name = name;
        this.size = size;
        if (description) this.description = description;
        this.occupants = []
    }
    get Id() { return this.id; }
    get Name() { return this.name; }
    get Size() { return this.size; }
    get Description() { return this.description; }
    get Occupants() { return this.occupants; }

    set Description(value: string) { this.Description = value; }
    set Name(value: string) { this.Name = value; }
    set Size(value: number) { this.Size = value; }

    showOccupants(): string {
        let result: string = '';

        this.occupants.forEach(element => {
            result += element.Username + ", "
        });

        return result;
    }

    addOcupant(user: User) {
        this.occupants.push(user);
    }
}