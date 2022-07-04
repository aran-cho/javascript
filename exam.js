// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
  
// rl.on('line', function(line) { 

//     const words = line.split(' '); 
//     const A = parseInt(words[0]); 
//     const B = parseInt(words[1]);
//     console.log(A+B);
//     rl.close(); 
// }).on("close", function() {
//     process.exit();
// });

// (0,'utf8') : 백준 파일명

//1번 구구단
// const fs = require('fs');
// const input = fs.readFileSync('./A.txt').toString();
// let A= Number(input)

// for(let N = 1; N < 10; N = N+1){
//     let B = A * N
//     console.log(A, '\*', N, "=", B);
// }
// A , '\*'를 안쓰고 '2 *'했는데 백준에서 실패했음 왜?

//2번 A+B -3
// const fs = require('fs');
// const input = fs.readFileSync('./A.txt').toString().split('\n') ;
// let A= Number(input);

// for(let B = 0; B < input[0] ; B++){
//     let c = input[B+1].split(' ');
//     let d = Number(c[0]) + Number(c[1]) ;
//     console.log(d)
// }

//3번 합
// const fs = require('fs');
// const input = fs.readFileSync('./A.txt').toString() ;
// let A= Number(input);

// let sum= 0;
// for(let B = 1; B <= input; B++){
//     sum = sum + B
// }
// console.log(sum);

//4번 빠른 A+B
// const fs = require('fs');
// const input = fs.readFileSync('./A.txt').toString().split('\n') ;
// // const input = fs.readFileSync(0,'utf8').toString().split('\n') ;
// let A= Number(input);

// for(let B = 0; B < input[0] ; B++){
//     let c = input[B+1].split(' ');
//     let d = Number(c[0]) + Number(c[1]) ;
//     f = d
// }
// console.log(f);

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
  
// rl.on('line', function(line) { 

//     const words = line.split(' '); 
//     const A = parseInt(words[0]); 
//     const B = parseInt(words[1]);
    
//     console.log(A+B);

//     rl.close(); 
// }).on("close", function() {
//     process.exit();
// });


//5번 N 찍기
// const fs = require('fs');
// const input = fs.readFileSync('./A.txt').toString() ;
// let A= Number(input);

// for(let B = 1; B <= input; B++){
//     console.log(B);
// }


//10번
const fs = require('fs');
const input = fs.readFileSync('./A.txt').toString() ;
let A= Number(input);

for(let B = 1; B <= input; B++){
    console.log(' '.repeat(input-B) + '*'.repeat(B));
}

