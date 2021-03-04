// let은 블록 범위이며 재할당은 가능하지만 재선언은 불가능하다.
function test() {
    let let_ = "test_let_";
    let_ = "test_let_reassignment";

    // let let_ = "test_let_2"; // SyntaxError: Identifier 'let_' has already been declared

    if (true) {
        let let_ = "if_let_";
        console.log(let_); // if_let_
    }
    console.log(let_); // test_let_reassignment
}

test();