interface IPerson {
    firstName: string;
    lastName: string;
    getFullName(): string;
    setFullName(getFullName: string): void;
    saveName(cb: (firstName: string, lastName: string) => void): void;
}
class Person implements IPerson {

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
