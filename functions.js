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
let print = 'sumTwo : + ${result}';
console.log(print);

//declarate 3 ways for function
// normal1
function sumTwo(x,z){
    let result = x + z
    return result;
}

// anonymous (function의 이름이 없고 function을 변수로 취급)
let sumTwoAnonymous = function (x,z){
    let result = x + z
    return result;
}




