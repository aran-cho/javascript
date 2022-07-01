// false : 0, null, NaN, undefined, ‘’(아무것도 없는 single quotation)
// true : any others value

let flag = true;        //1
flag = false;       //0 

let condition = 20 > 5;
condition= 20 <= 5;

let condition_first =15 > 5;
let condition_second = 15 < 7;

// ||(or), &&(and), !(not)
let result = condition_first || condition_second;
result = condition_first && condition_second;
!result
console.clear();

