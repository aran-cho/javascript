const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line) { // 문자열 입력 받기
    // 입력 시 동작들
const words = line.split(' '); // 입력 받은 문자열 쪼개기 split
const A = parseInt(words[0]); // 쪼갠 문자열 + 문자열을 숫자로 변환  parseInt
const B = parseInt(words[1]);

if(A > B){
    console.log(">");
} else if(A < B){
    console.log("<");
} else {
    console.log("==");
}

rl.close(); // 종료
}).on("close", function() {
    // 입력 마친 후 동작
process.exit(); // 프로그램 종료
});
