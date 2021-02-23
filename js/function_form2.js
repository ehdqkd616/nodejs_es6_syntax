function NumberEx1() {
    var that = this
    that.num = 0;
    setInterval(function add() {
      // setInterval 안에서의 this 는 NumberEx의 this가 아니고
      // function add의 this 이므로 다른 변수에 this를 지정하여 써야한다.
      that.num++;
      console.log(that.num);
    }, 500);
}

function NumberEx2() {
    this.num = 0;
    
    setInterval(() => {
        this.num++; // this is from NumberEx
        console.log(this.num);
    }, 500)
}

function NumberEx3() {
    this.num = 0;

    console.log("NumberEx3() this : " + this.num);
    console.log("-------------------------------------");
    
    setInterval(function add() {
        this.num = 1;
        console.log("function add()의 this : " + this.num);
        console.log("-------------------------------------");
        if(this.num == 1){
            process.exit();
        }
    }, 1000);
}

// NumberEx1();
// NumberEx2();
NumberEx3();

// 화살표 함수는 자신의 this가 바인드 되지 않기 때문에 함수의 스코프에서의 this 가 적용된다.