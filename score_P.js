const readline = require('readline');

// 입력
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
rl.on('line', function(line) { // 문자열 입력 받기
		// 입력 시 동작들
    const score = parseInt(line);
    
if(score>=90){
    console.log("A");
} else if(score>=80){
    console.log("B");
} else if(score>=70){
    console.log("C");
} else if(score>=60){
    console.log("D");
} else {
    console.log("F");
}

    rl.close(); // 종료
}).on("close", function() {
		// 입력 마친 후 동작
    process.exit(); // 프로그램 종료
});