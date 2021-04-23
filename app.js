// var person1 = {
//     firstName: 'YeonWoo',
//     lastName: 'Kim'
// };
// var person2 = {
//     firstName: 'Rudy',
//     lastName: 'Kim'
// };

// (function say() {
//     console.log('Hello ' + this.firstName + ' ' + this.lastName);
// }.bind(person1));

// var sayHelloJon = say.bind(person1);
// var sayHelloKelly = say.bind(person2);

// sayHelloJon(); // Hello Jon Kuperman sayHelloKelly(); // Hello Kelly King


// const test = {};
// test.test = 0;

// console.log(test);

// test = {};
// console.log(test);

// let test = {};
// test["key1"] = "value";

// console.log(test["key1"]);
// console.log(test.key1);
// console.log(test.key1);

// console.log(test.key1.val());

// let target = 'target1';
// var to = Object(target);


// console.log(arguments);

// let util = {};
// // 1000단위 , 붙이는 함수
// util.formatCurrency = function (v) {
//     if (v == 0) return 0;

//     var reg = /(^[+-]?\d+)(\d{3})/;
//     var n = (v + "");

//     while (reg.test(n))
//         n = n.replace(reg, `$1,$2`);

//     return n;
// }

// console.log(util.formatCurrency(10000));


// let dateObj = Object.Now;
// let endDate = Object.Now;

// let loopCount = Math.abs(dateObj.diff(moment(endDate), "days"));

// console.log(loopCount);



let length = 5;
let split = 20;

// console.log(Math.abs(length % split));
console.log(length % split);