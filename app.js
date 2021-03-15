var person1 = {
    firstName: 'YeonWoo',
    lastName: 'Kim'
};
var person2 = {
    firstName: 'Rudy',
    lastName: 'Kim'
};

(function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}.bind(person1));

var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello Jon Kuperman sayHelloKelly(); // Hello Kelly King