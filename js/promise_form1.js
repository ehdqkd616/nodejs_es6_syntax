function promise_function(delay_time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, delay_time);
    });
}

async function run_form1() {
    console.log("start");

    try {
        all(await promise_function(3000));

        console.log("end");
    } catch (err) {
        console.log("err : " + err);
    }
}

run_form1();