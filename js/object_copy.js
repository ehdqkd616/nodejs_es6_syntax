function fn_object_copy1() {
    let object = {
        one: 1,
        two: 2,
        three: 3
    }; // 원본 객체

    let object_copy = object; // 사본 객체
    object_copy.four = 4;

    console.log(`object = ${JSON.stringify(object)}`); // object = {"one": 1, "two": 2, "three": 3, "four": 4}
    console.log(`object_copy = ${JSON.stringify(object_copy)}`); // object_copy = {"one": 1, "two": 2, "three": 3, "four": 4}
}

// fn_object_copy1();

////////////////////////////////////////////////////////////////////////////////////////////////////////

let object = {
    one: 1,
    two: 2,
    three: 3
}; // 원본 객체

let object_copy = object; // 사본 객체

function fn_object_copy2(object_param) {

    object_param.four = 4;

    console.log(`object = ${JSON.stringify(object)}`); // object = {"one": 1, "two": 2, "three": 3, "four": 4}
    console.log(`object_copy = ${JSON.stringify(object_copy)}`); // object_copy = {"one": 1, "two": 2, "three": 3, "four": 4}
}

// fn_object_copy2(object);

////////////////////////////////////////////////////////////////////////////////////////////////////////

function fn_object_copy3() {
    let object = {
        one: 1,
        two: 2,
        three: 3
    }; // 원본 객체

    let object_copy = object; // 사본 객체
    object = {}; // 원본 객체 빈 객체로 초기화

    console.log("예상했던 결과 값");
    console.log(`object = {}`);
    console.log(`object_copy = {}`);

    console.log("-------------------------");

    console.log("실제 결과 값");
    console.log(`object = ${JSON.stringify(object)}`); // object = {}
    console.log(`object_copy = ${JSON.stringify(object_copy)}`); // object_copy = {"one": 1, "two": 2, "three": 3, "four": 4}
}

fn_object_copy3();

////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
    알게된 점
    let object_copy = object;
    
    위의 코드는 언뜻 보면 object 라는 객체를 혹은 그 값을 object_copy에 넣어서
    object의 모든 속성을 물려받고, 공유하는 것 처럼 보인다.

    하지만, 실제로는 object가 참조하고 있는 메모리 주소를 object_copy에 넣은 것이다.
    때문에 object = {} 로 초기화를 했을때, object와 object_copy는 더 이상 같은 주소를
    참조하지 않게 되기 때문에 object_copy의 값은 변하지 않고 object의 값만 초기화 된다.
*/