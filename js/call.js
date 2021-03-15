var person1 = {
    firstName: 'YeonWoo',
    lastName: 'Kim',
};
var person2 = {
    firstName: 'Rudy',
    lastName: 'Kim',
};

function say(age, gender) {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
    console.log(this.firstName + ' ' + this.lastName + '\'s age : ' + age + ', gender : ' + gender);
};

// 바로 실행
(function say(age, gender) {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
    console.log(this.firstName + ' ' + this.lastName + '\'s age : ' + age + ', gender : ' + gender);
}).call(person1, 25, 'M');

// say.call(person1, 25, 'M'); // Hello YeonWoo Kim
// say.call(person2, 20, 'W'); // Hello Rudy Kim