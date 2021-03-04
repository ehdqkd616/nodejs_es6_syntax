function promise_function(delay_time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, delay_time);
    });
}

async function run_form2() {
    console.log("start");

    promise_function(3000).then(function () {
        console.log("end");
    }).catch(function (err) {
        console.log("err : " + err);
    });
}

run_form2();