class Person {
    constructor (id, name) {
        this.id = id;
        this.name = name;
    }

    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }

    setId(newId){
        this.id = newId;
    }
    setName(newName){
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
    
    getAge(){
        return this.age;
    }
    
    setAge(newAge){
        this.age = newAge;
    }
    
    toString() {
        return super.toString() + ' and age = ' + this.age;
    }
}

let person = new Person('person', '사람');
console.log('--------------Person--------------');
console.log(person.toString());

person.setId('set_person');
person.setName('set_name');

console.log(person.toString());

let student = new Student('student', '학생', 25);
console.log('--------------student--------------');
console.log(student.toString());

student.setId('set_person');
student.setName('set_name');
student.setAge(30);

console.log(student.toString());

console.log('--------------student.get--------------');
console.log('student.getId() : '+student.getId());
console.log('student.getName() : '+student.getName());
console.log('student.getAge() : '+student.getAge());

console.log('--------------student.field--------------');
console.log('student.id : '+student.id);
console.log('student.name() : '+student.name);
console.log('student.age() : '+student.age);