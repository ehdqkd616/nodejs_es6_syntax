function NumberEx2() {
    this.num = 0;
    
    setInterval(() => {
        this.num++; // this is from NumberEx
        console.log(this.num);
    }, 500)
}

NumberEx2();