const async_function = async function () {
    try {
        await timer(2000, '실행');
        console.log('start');

        await timer(2000, '결과 출력');
        const result = await plus(2, 3);
        console.log(result);

        await timer(2000, '종료');
        console.log('end');
    } catch (err) {
        console.log(err);
    }
}

function plus(num1, num2) {
    return num1 + num2;
}

function plus(num1, num2) {
    return new Promise(function (resolve, resject) {
        resolve(num1 + num2);
    });
}

function timer(time, cmd) {
    return new Promise(function (resolve, resject) {
        console.log(time / 1000 + '초 후 ' + cmd);
        setTimeout(function () {
            resolve();
        }, time);
    });
}

async_function();