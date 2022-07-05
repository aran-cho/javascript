let varFirst = 1;
console.log(varFirst);

{
    var varSencond = 2;
    console.log(varSencond);
}
console.log(varSencond);

{
    let varThird = 3;
    console.log("Third - first : " + varThird);
}
console.log("next");

{
    let varThird = 4;
    console.log("Third - second : " + varThird);
    {
        let varFifth = 5;
        console.log("Third - third : " + varThird);
        console.log("First : " + varFirst);
        console.log("test1 : " + varThird);
        console.log("test2 : " + varFifth);
    }
    console.log("Third - fourth : " + varThird);

}
console.log("End !");

// *var은 사용하지 않음 자유도가 높아 디버깅안에 local global 에서 혼란
// *변수는 명사로 사용
// myVariableName // 카멜 케이스
// _myVariable_name // 스네이크 케이스
// {}는 특정 scope에 focus를 맞춤 컴퓨터는 {}안에 있는 변수를 출력
// {}는 특정 scope가 끝나면 다음 {}를 새롭게 인식