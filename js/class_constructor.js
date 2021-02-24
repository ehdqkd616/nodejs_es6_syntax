class Person {
    constructor (id, name) {
        this.id = id;
        this.name = name;
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
    toString() {
        return super.toString() + ' and age = ' + this.age;
    }
}

let person = new Person('person', '사람');
let student = new Student('student', '학생', 25);

console.log(person.toString());
console.log(student.toString());