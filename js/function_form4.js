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

NumberEx3();

// 화살표 함수는 자신의 this가 바인드 되지 않기 때문에 함수의 스코프에서의 this 가 적용된다.