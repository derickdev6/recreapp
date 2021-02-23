"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Space = void 0;
class Space {
    constructor(id, name, size, description) {
        this.description = "";
        this.id = id;
        this.name = name;
        this.size = size;
        if (description)
            this.description = description;
        this.occupants = [];
    }
    get Id() { return this.id; }
    get Name() { return this.name; }
    get Size() { return this.size; }
    get Description() { return this.description; }
    get Occupants() { return this.occupants; }
    set Description(value) { this.Description = value; }
    set Name(value) { this.Name = value; }
    set Size(value) { this.Size = value; }
    showOccupants() {
        let result = '';
        this.occupants.forEach(element => {
            result += element.Username + ", ";
        });
        return result;
    }
    addOcupant(user) {
        this.occupants.push(user);
    }
}
exports.Space = Space;
