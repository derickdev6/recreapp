import { Space } from "./Space";
import { User } from "./User";


export class System {
    private users: User[] = [];
    private spaces: Space[] = [];

    constructor(users?: User[], spaces?: Space[]) {
        if (users) this.users = users;
        if (spaces) this.spaces = spaces;
    }

    get Users() { return this.users};
    get Spaces() { return this.spaces};

    addNewUser(user: User){
        this.users.push(user);
    }
    addNewSpace(space: Space){
        this.spaces.push(space);
    }
}