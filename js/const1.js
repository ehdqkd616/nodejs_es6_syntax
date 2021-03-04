// const는 블록 범위이며 값이 지정되면 나중에 바꿀 수 없다.
// 또한, 재 선언 될 수도 없다.
const const_ = "value";
const_ = "changed_value"; // Error

console.log(const_);