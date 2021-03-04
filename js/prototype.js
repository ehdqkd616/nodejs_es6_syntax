let person1 = new Person('Rudy', 25, 'M');

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// person1.valueOf();

console.log(Person.prototype);
console.log(Object.prototype);