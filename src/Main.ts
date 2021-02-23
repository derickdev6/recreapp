import { System } from "./System";
import { Space } from "./Space";
import { User } from "./User";

let mainSystem = new System();

function NewSpace(id: number, name: string, size: number, description?: string) {
    let newSpace = new Space(id, name, size, description);
    mainSystem.addNewSpace(newSpace);
}
function newUser(id: number, email: string, username: string, password: string, age?: number) {
    let newUser = new User(id, email, username, password, age)
}
alert('Working');
// const btn_newuser = document.getElementById("btn-newuser");
// const btn_newspace = document.getElementById("btn-newspace");

// btn_newspace?.addEventListener("click", () => alert('click hehe'))