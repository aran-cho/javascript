// y = x + 1 -> function(수학에서는 숫자만 해당)
// 컴퓨터에서의 function은 모든 변수
// x = "str" -->  y = "str1"
// x = 2 --> y = 3
//y = x+1


function sum(x)
{
    let y = x +1
    return y;
}


function multiply(x)
{
    let y = x * 1
    return y;
}

sum(5);
multiply(6);

// y = x + z

function sumTwo(x,z){
    let result = x + z
    return result;
}

let result = sumTwo(5,7);

// let result = sumTwo(5,7);

// function sumTwo(x,z){
//     let result = x + z
//     return result;
// }
// console.log(result);
// //function은 호출 순서를 변경해도 가능(호이스팅)


// let print = "sumTwo :" + result; 대신 백틱(') 사용
let print = `sumTwo : ${result}`;
console.log(print);

//declarate 3 ways for function
//1) normal
function sumTwo(x,z){
    let result = x + z
    return result;
}

//2) anonymous (function의 이름이 없고 function을 변수로 취급)
//sumTwoAnonymous 뒤에 ()가 숨어있다고 생각,
//()안에 있는 값들은 parameter(파라미터)
let sumTwoAnonymous = function (x,z){
    let result = x + z
    return result;
}


//3) arrow function (위의 anonymous와 동일)
let sumTwoArrow = (x,z) => {
    let result = x + z
    return result;
}

sumThree(first, second);

//--> arrow가 더 편리함 하지만 objcet로 넣어줄때는 anonymous 사용

//Quiz
// sum function 3th number type variables
// params variable
// result by variable and the print with back tick

//내가 한거
function sumThree(x,y,z){
    let result = x + y +z;
    return result;
}

let A = sumThree(5, 6, 7); // 상수로 바로 넣으면 유지보수에 안좋으니까 변수 해주고 하기
// let prints = "sumTwo :" + A;
let prints = `sumThree : ${A}`;
console.log(prints);

//강사님이랑 같이
function sumThree(item_1,item_2,item_3){
    let result = item_1 + item_2 + item_3;
    return result;
}
let first = 2;
let second = 3;
let third = 4;
results = sumThree(first,second,third);
let backtick = `sumThree() fucntinon : ${results}`;
console.log(backtick);




function sumFour(item_1,item_2,item_3=0){
    let result = sumTwo(item_1, item_2);
    let backtick = `sumTwo : ${result}`
    console.log(backtick);
    result = item_1 + item_2 + item_3;
    return result;
}

console.log(sumFour(first, second));
