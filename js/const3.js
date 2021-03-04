// const는 let과 마찬가지로 블록 레벨 스코프를 갖는다.
{
    const const_2 = 10;
    console.log(const_2); //10
}
console.log(const_2); // ReferenceError: const_ is not defined