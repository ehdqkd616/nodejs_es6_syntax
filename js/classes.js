class Shape {
    constructor() {}
}

class Rectangle extends Shape {
    constructor(w, h) {
        super(w, h)
        this.w = 20
        this.h = 10
    }    
    getArea(w, h) {
        return w * h
    }
 	// get, set, static 예약어로 메서드를 설정할 수 있음
}
let rect = new Rectangle()
console.log(rect.getArea(30, 20))	// 600