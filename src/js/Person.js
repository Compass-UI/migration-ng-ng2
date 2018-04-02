var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.setFullName = function () {
        /** TBI */
    };
    Person.prototype.saveName = function (cb) {
        /** TBI */
        cb(this.firstName, this.lastName);
    };
    return Person;
}());
var david = new Person("David", "Shams");
console.log(david);
console.log(david.getFullName());
