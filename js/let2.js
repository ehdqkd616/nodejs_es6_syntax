// var를 사용한 경우, i값이 setTimout 함수가 호출되는 시점에 이미 3이 되어있기 때문에 3이 반환된다.
// 즉 setTimout 함수 실행을 명령하는 시점과 반환 값이 리턴되는 시점이 달라서 i값이 명령 시점의 값으로 보장되지 않는다.
const var_function = function () {
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    }
}

// 하지만 let을 사용할 경우, setTimout 함수 실행을 명령하는 시점의 i값과
// 반환 값이 리턴되는 시점의 i값을 동일할 수 있도록 보장한다.
const let_function = function () {
    for (let i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    }
}

// var를 쓰는 경우에도 이와 같은 결과를 보장하는 방법이 있다.
// 함수 실행을 명령하는 시점의 i값을 인자로 전달하여 반환 값이 리턴되는 시점의 i값을 보장할 수 있다.
const var_param_function = function () {
    for (var i = 0; i < 3; i++) {
        (function (i) {
            setTimeout(function () {
                console.log(i);
            }, 100);
        }(i));
    }
}

var_function();
let_function();
var_param_function();

// let은 블록 범위이다. 따라서 for문 안의 setTimeout 함수가 참조하는 i는
// 같은 범위가 아닌 각각의 루프마다 다른 블록의 범위를 가지고 있다.
// 때문에 각각의 루프에서 호출되도록 예약된 i의 값이 공유되지 않고
// 명령된 시점의 i값을 보장할 수 있는 것이다.