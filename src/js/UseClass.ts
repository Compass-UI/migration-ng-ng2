import { IPerson } from './Person';
import { Person } from './Person';

function showName(person: IPerson){
    console.log(person.getFullName());
}

var sean = new Person('Sean', 'Shams');
showName(sean);