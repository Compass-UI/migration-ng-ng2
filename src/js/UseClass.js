"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
function showName(person) {
    console.log(person.getFullName());
}
var sean = new Person_1.Person('Sean', 'Shams');
showName(sean);
