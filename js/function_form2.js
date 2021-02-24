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

NumberEx1();