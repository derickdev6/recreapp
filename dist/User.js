"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, email, username, password, age) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        if (age)
            this.age = age;
    }
    get Id() { return this.id; }
    get Email() { return this.email; }
    get Username() { return this.username; }
    get Password() { return this.password; }
    get Age() { return this.age; }
    getInSpace(space) {
        space.addOcupant(this);
    }
}
exports.User = User;
