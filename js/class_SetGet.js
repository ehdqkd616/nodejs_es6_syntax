class Person {
    constructor (id, name) {
        this.id = id;
        this.name = name;
    }

    get id(){
        return this.id;
    }

    get name(){
        return this.name;
    }

    set id(newId){
        this.id = newId;
    }

    set name(newName){
        this.name = newName;
    }

    toString() {
        return `(id = ${this.id}, name = ${this.name})`;
    }
}

class Student extends Person {
    constructor (id, name, age) {
        super(id, name);
        this.age = age;
    }
    get age(){
        return this.age;
    }

    set age(newAge){
        this.age = newAge;
    }
    toString() {
        return super.toString() + ' and age = ' + this.age;
    }
}

let person = new Person('person', '사람');
console.log(person.toString());

person.setId('set_person');
person.setName('set_name');

console.log(person.toString());

let student = new Student('student', '학생', 25);
console.log(student.toString());

student.setId('set_person');
student.setName('set_name');
student.setAge(30);

console.log(student.toString());