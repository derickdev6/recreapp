"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const System_1 = require("./System");
const Space_1 = require("./Space");
const User_1 = require("./User");
let mainSystem = new System_1.System();
function NewSpace(id, name, size, description) {
    let newSpace = new Space_1.Space(id, name, size, description);
    mainSystem.addNewSpace(newSpace);
}
function newUser(id, email, username, password, age) {
    let newUser = new User_1.User(id, email, username, password, age);
}
alert('Working');
// const btn_newuser = document.getElementById("btn-newuser");
// const btn_newspace = document.getElementById("btn-newspace");
// btn_newspace?.addEventListener("click", () => alert('click hehe'))
