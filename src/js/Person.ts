export interface IPerson {
    firstName: string;
    lastName: string;
    getFullName(): string;
    setFullName(getFullName: string): void;
    saveName(cb: (firstName: string, lastName: string) => void): void;
}
export class Person implements IPerson {/** Duplicate identifier error due to compiled Person.js - OK */

    constructor(public firstName: string, public lastName: string){};
    getFullName(){
        return `${this.firstName } ${this.lastName}`
    }

    setFullName(){
        /** TBI */
    }
    saveName(cb){
        /** TBI */
        cb(this.firstName, this.lastName)
    }
}

var david = new Person(`David`, `Shams`);

console.log(david);
console.log(david.getFullName());