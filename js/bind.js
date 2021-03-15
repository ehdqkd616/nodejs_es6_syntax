var person1 = {
    firstName: 'YeonWoo',
    lastName: 'Kim'
};
var person2 = {
    firstName: 'Rudy',
    lastName: 'Kim'
};

function say(age, gender) {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
    console.log(this.firstName + ' ' + this.lastName + '\'s age : ' + age + ', gender : ' + gender);
}

// bind 함수는 즉시 실행이 불가능 하다.
(function say(age, gender) {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
    console.log(this.firstName + ' ' + this.lastName + '\'s age : ' + age + ', gender : ' + gender);
}.bind(person1, 25, 'M')); // 결과 안나옴

// bind 함수는 즉시 실행이 불가능 하다22.
say.bind(person1, 25, 'M');
say.bind(person2, 20, 'W');
// 결과 안나옴

// 변수에 함수를 할당한 후에 사용 가능하다.
var sayHelloYeonWoo = say.bind(person1, 25, 'M');
var sayHelloRudy = say.bind(person2, 20, 'W');

sayHelloYeonWoo(); // Hello YeonWoo Kim
sayHelloRudy(); // Hello Rudy Kim