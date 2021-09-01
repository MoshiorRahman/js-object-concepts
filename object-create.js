//1. using object literal 
const student = { name: 'rokibul', job: 'frilancer' };

//2. object constructor
const person = new Object();
// console.log(person)


//3. 
const human = Object.create(student);
// console.log(human)

//4. class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manush', 23);
// console.log(peop)

//5. function 
function Manush(name) {
    this.name = name;
}
const man = new Manush('Kader');
console.log(man)