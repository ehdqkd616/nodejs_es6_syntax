// events 모듈 사용
var events = require('events');

// EventEmitter 객체 생성
var eventEmitter = new events.EventEmitter();

var param = {
    "param1": 1,
    "param2": 2,
    "param3": 3
};

// initHandler 정의
var initHandler = function () {
    console.log("init 이벤트 발생");
}

// addHandler 정의
var addHandler = function () {
    var cnt = 1;
    setInterval(function () {
        console.log("add 이벤트 발생 " + '(' + cnt + ')');
        cnt++;
        if (cnt == 11) {
            console.log("프로세스를 종료합니다.");
            process.exit();
        }
    }, 1000);
}

// paramHandler 정의
var paramHandler = function (data) {
    console.log("param 이벤트 발생");
    console.log(data);
}

eventEmitter.on('init', initHandler); // 'init' 이라는 이름으로 initHandler를 등록!
eventEmitter.on('add', addHandler); // 'add' 이라는 이름으로 addHandler를 등록!
eventEmitter.on('param', paramHandler);

eventEmitter.emit('add'); // 'add' 이벤트 호출 
eventEmitter.emit('init'); // 'init' 이벤트 호출 
eventEmitter.emit('param', param); // 이벤트 호출 시 parameter를 넘겨줄 수 있다.