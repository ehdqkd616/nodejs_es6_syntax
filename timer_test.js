'use strict';

const timer = module.exports = {};

timer._list = {};

// timer 생성 함수
// 테스트 필요
timer.create = function (id, interval, loopCount, callback) {
    if (this.exists(id)) {
        console.log(`인스턴스 [${ id }] 생성 불가 (reason: ERR_ALREADY_EXISTS)`)
        return false;
    }

    let obj = {
        id: id,
        interval: interval,
        loopCount: loopCount,
        callback: callback,
        active: false,
        _intervalObj: null,
        _intervalFunc: null
    }

    let intervalFunc;

    // loopCount 0이면 callback을 무한번 실행한다.
    if (loopCount === 0) {
        intervalFunc = function () {
            obj.callback();
        }
    }
    // loopCount 0이 아니면 callback을 loopCount 번 실행한다.
    else {
        intervalFunc = function () {
            if (--obj.loopCount >= 0) {
                obj.callback();

                if (obj.loopCount === 0)
                    timer.remove(obj.id, "Loop limit reached"); // loopCount가 0이 되면 timer를 제거한다.
            }
        }
    }

    console.log(`인스턴스 [${ id }] 생성 완료 (interval: ${ interval }, loopCount: ${ loopCount })`)

    obj.active = true;
    obj._intervalFunc = intervalFunc;
    obj._intervalObj = setInterval(intervalFunc, interval); // 타이머가 실행되는 지점

    this._list[id] = obj; // 이부분 테스트 필요.

    return true;
}

// 타이머(id) 존재 여부를 확인하는 함수
timer.exists = function (id) {
    return this._list.hasOwnProperty(id);
}

// 타이머(id)가 running 중인지 체크
timer.isRunning = function (id) {
    if (!this.exists(id))
        return false;

    let timerObj = this._list[id];

    return timerObj.active;
}

// 타이머(id) 재개 함수
timer.resume = function (id) {
    if (!this.exists(id)) // 존재하는 타이머(id)가 아니면 에러 띄우고 종료
    {
        console.log(`인스턴스 [${ id }] 재개 불가 (reason: ERR_NOT_EXISTS)`);
        return;
    }

    let timerObj = this._list[id];

    if (!timerObj.active) {
        timerObj.active = true;
        timerObj._intervalObj = setInterval(timerObj._intervalFunc, timerObj.interval);

        console.log(`인스턴스 [${ id }] 재개 완료`);
    } else
        console.log(`인스턴스 [${ id }] 재개 불가 (reason: ERR_ALREADY_ACTIVE)`);
}

// timer(id) 멈추는 함수
timer.pause = function (id) {
    if (!this.exists(id)) {
        console.log(`인스턴스 [${ id }] 일시 중지 불가 (reason: ERR_NOT_EXISTS)`);
        return;
    }

    let timerObj = this._list[id];

    if (timerObj.active) {
        timerObj.active = false;
        clearInterval(timerObj._intervalObj);
        timerObj._intervalObj = null;

        console.log(`인스턴스 [${ id }] 일시 중지 성공`);
    } else
        console.log(`인스턴스 [${ id }] 일시 중지 불가 (reason: ERR_NOT_ACTIVE)`);
}

// 타이머(id)제거 함수
timer.remove = function (id, reason) {
    if (!this.exists(id)) {
        console.log(`인스턴스 [${ id }] 제거 불가 (reason: ERR_NOT_EXISTS)`);
        return;
    }

    let timerObj = this._list[id];

    clearInterval(timerObj._intervalObj);
    this._list[id] = null;
    delete this._list[id];

    console.log(`인스턴스 [${ id }] 제거 성공 (reason: ${ reason || "이유 없음" }])`);
}

module.exports = timer;