let condition = true;
condition = 30 > 6; 

number_first = 30;
number_second = 6;
condition = number_first > number_second;
let condition_second = ( number_first <= number_second);
condition = condition || condition_second;

if (condition) {
    console.log("in if state!");
} //진실이면 출력

if (!condition) {
    console.log("not in if state!");
} //거짓이면 출력
//   컨디션 상태에 따라 어떤건 찍고 어떤건 안 찍을수 있음

let score = 50;
if (score >= 90){
    console.log("well !");
} else if (score >= 50 ) {
    console.log("good !");
} else {
    console.log("not bad !")
}

// === 
console.clear()



