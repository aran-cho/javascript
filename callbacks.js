let first = 2;
let second = 3;
let third = 4;

// function sumTwo(x,z){
//     let result = x + z
//     return result;
// }


// function sumFour(item_1,item_2,item_3=0){
//     let result = sumTwo(item_1, item_2);
//     let backtick = `sumTwo : ${result}`
//     console.log(backtick);
//     result = item_1 + item_2 + item_3;
//     return result;
// }

// console.log(sumFour(first, second));

// **callback function

// console.log(sumFour(first, sumTwo(first,second)));
// 콜백에서 사용하기 편리하려고 anonymous 사용

let sumTwo = function (x,z){
    let result = x + z
    return result;
}

let multiplyTwo = function (x,z){
    let result = x * z
    return result;
}

let division = function (x,z){
    let result = x / z
    return result;
}

let sumFour = function(item_1,item_2,item_3=0, callback){
    let result = callback(item_1, item_2);  // callback function
    let backtick = `callback result : ${result}`
    console.log(backtick);
    result = item_1 + item_2 + item_3;
    return result;
}

console.log(sumFour(first, second, third, multiplyTwo));
console.log(sumFour(first, second, third, sumTwo));
console.log(sumFour(first, second, third, division));
//anonymous할때는 파라미터 개수 꼭 지키기

//