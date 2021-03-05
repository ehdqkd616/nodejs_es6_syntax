let person1 = new Person('Rudy', 25, 'M');
let person2 = new Person('Useop', 28, 'W');

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

Person.prototype.property = 'Persons_property';
person1.property = 'person1s_property';

console.log(Person.prototype.property);
console.log(person1.property);

// console.log(Object.);

// console.log(person2.__proto__);

// console.log(Object.prototype);