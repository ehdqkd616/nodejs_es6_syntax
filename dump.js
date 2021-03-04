new Redis(); // Connect to 127.0.0.1:6379 
new Redis(6380); // 127.0.0.1:6380 
new Redis(6379, "192.168.1.1"); // 192.168.1.1:6379 
new Redis("/tmp/redis.sock");
new Redis({
    port: 6379, // Redis port 
    host: "127.0.0.1", // Redis host 
    family: 4, // 4 (IPv4) or 6 (IPv6) 
    password: "auth",
    db: 0,
});






const Redis = require("ioredis");
const redis = new Redis(); // uses defaults unless given configuration object 
// ioredis supports all Redis commands: 
redis.set("Key", "Value"); // returns promise which resolves to string, "OK" 
// the format is: redis[SOME_REDIS_COMMAND_IN_LOWERCASE](ARGUMENTS_ARE_JOINED_INTO_COMMAND_STRING) 
// the js: ` redis.set("mykey", "Hello") ` is equivalent to the cli: ` redis> SET mykey "Hello" ` 
// ioredis supports the node.js callback style 
redis.get("Key", function (err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log(result); // Promise resolves to "Value" 
    }
});
// Or ioredis returns a promise if the last argument isn't a function 
redis.get("Key").then(function (result) {
    console.log(result); // Prints "Value" 
});
// Most responses are strings, or arrays of strings 
redis.zadd("sortedSet", 1, "one", 2, "dos", 4, "quatro", 3, "three");
redis.zrange("sortedSet", 0, 2, "WITHSCORES").then((res) => console.log(res)); // Promise resolves to ["one", "1", "dos", "2", "three", "3"] as if the command was ` redis> ZRANGE sortedSet 0 2 WITHSCORES ` 
// All arguments are passed directly to the redis server: 
redis.set("key", 100, "EX", 10);











var cluster = require('cluster');
var os = require('os');

if (cluster.isMaster) {
    //CPU의 갯수만큼 워커 생성
    os.cpus().forEach(function (cpu) {
        cluster.fork();
    });

    //워커가 죽으면,
    cluster.on('exit', function (worker, code, signal) {

        //종료된 클러스터 로그
        console.log('워커 종료 : ' + worker.id);

        if (code == 200) {
            //종료 코드가 200인 경우, 워커 재생성
            cluster.fork();
        }
    });
} else {
    //워커 로직을 여기에 작성
    console.log('워커 생성 : ' + cluster.worker.id);
}








//마스터가 워커들에게 종료 예고 메시지 전송
for (var id in cluster.workers) {
    cluster.workers[id].send({
        type: 'shutdown',
        from: 'master'
    });
}

//워커가 종료 예고를 받고 적절한 처리 후 스스로 종료
process.on('message', function (message) {
    if (message.type === 'shutdown') {
        //안전하게 종료할 수 있는 로직
        //워커 종료
        process.exit(0);
    }
});









if (cluster.isMaster) {
    //워커 생성
    var worker = cluster.fork();

    //생성한 워커가 보내는 메시지 처리
    worker.on('message', function (message) {
        console.log('마스터가 ' + worker.process.pid + ' 워커로부터 받은 메시지 : ' + message);
    });

    //생성한 워커에게 메시지 보내기
    worker.send('마스터가 보내는 메시지');
}

if (cluster.isWorker) {
    //마스터가 보낸 메시지 처리
    process.on('message', function (message) {
        console.log('워커가 마스터에게 받은 메시지 : ' + message);
    });

    //마스터에게 메시지 보내기
    process.send(process.pid + ' pid 를 가진 워커가 마스터에게 보내는 메시지');
}









cluster.on('online', function (worker) {
    console.log('생성된 워커의 아이디 : ' + worker.process.pid);
});

cluster.on('exit', function (worker, code, signal) {
    console.log('죽은 워커의 아이디 : ' + worker.process.pid);
    console.log('죽은 워커의 exit code : ' + code);
    console.log('죽은 워커의 signal : ' + signal);
});








var worker = cluster.fork();







if (cluster.isWorker) {
    console.log('워커');
}







if (cluster.isMaster) {
    console.log('마스터');
}






//워커 스케쥴을 OS에 맡긴다.
cluster.schedulingPolicy = cluster.SCHED_NONE;

//워커 스케쥴을 Round Robin 방식으로 한다.
cluster.schedulingPolicy = cluster.SCHED_RR;







var cluster = require('cluster');









// ES5
"use strict";

[object_name].map(function (n) {
    return Math.pow(n, n);
});








// ES6 화살표 함수와 ES7 지수 연산자
[object_name].map(n => n ** n);








var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

function executeStatement() {
    request = new Request("[Procedure_name]", function (err, rowCount, rows) {
        if (err) { // 에러 발생 시
            console.log(err);

        } else {
            console.log(rowCount);
            console.log(rows);
        }
    });
}


request.addParameter('[parameter_name]', TYPES. [TYPE], data);

request.on('doneInProc', function (rowCount, more, rows) {
    console.log('event doneInProc');
    console.log('rowCount : ' + rowCount);
    console.log('more : ' + more);
    console.log('rows : ' + rows);
    console.log('-------------------------------------');
});

connection.callProcedure(request);








var Request = require('tedious').Request;

function executeStatement() {
    request = new Request("select [Column1], [Column2] ... from [Table]", function (err, rowCount) {
        if (err) { // 에러 발생 시
            console.log(err);
        } else { // 요청 성공 시
            console.log(rowCount + ' rows');
        }
    });

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log(column.value);
        });
    });

    connection.execSql(request);
}