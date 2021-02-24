// let은 블록 범위이며 값이 지정되어도 값을 바꿀 수 있다.
function test() {
  let let_ = "test_let_";
  if (true) {
    let let_ = "if_let_";
    console.log(let_);  // if_let_
  }
  console.log(let_);  // test_let_
}

test();