// const가 한번 할당 되면 '재선언', '재할당'은 될 수 없지만 객체의 내용은 변경 가능하다.
const user = {
    name: 'Lee'
};

console.log(user); // { name: 'Lee' }

// const 변수는 재할당이 금지된다.
// user = {}; // TypeError: Assignment to constant variable.

// 객체의 내용은 변경할 수 있다.
user.name = 'Kim';

console.log(user); // { name: 'Kim' }
// const 변수의 타입이 객체인 경우, 객체에 대한 참조를 변경하지 못한다는 것을 의미한다. 
// 하지만 이때 객체의 프로퍼티는 보호되지 않는다. 
// 다시 말하자면 재할당은 불가능하지만 할당된 객체의 내용(프로퍼티의 추가, 삭제, 프로퍼티 값의 변경)은 변경할 수 있다.