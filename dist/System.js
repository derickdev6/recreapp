"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.System = void 0;
class System {
    constructor(users, spaces) {
        this.users = [];
        this.spaces = [];
        if (users)
            this.users = users;
        if (spaces)
            this.spaces = spaces;
    }
    get Users() { return this.users; }
    ;
    get Spaces() { return this.spaces; }
    ;
    addNewUser(user) {
        this.users.push(user);
    }
    addNewSpace(space) {
        this.spaces.push(space);
    }
}
exports.System = System;
