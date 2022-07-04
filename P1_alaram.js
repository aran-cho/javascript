const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
rl.on('line', function(line) { 

    const words = line.split(' ');
    const H = parseInt(words[0]);
    const M = parseInt(words[1]);

    if (H<=0 && M < 45){
        console.log((H+23), (M+15));
    }
    else if (1<= H <=23 && M < 45 ){ 
        console.log((H-1), (M+15));
    } else if ( M >= 45 ){
        console.log(H, (M-45));
    }

    rl.close(); 
}).on("close", function() {

    process.exit();
});

// 입력
// let input = "2 50".split(' ');
// let hour = Number(input[0]);
// let minute = Number(input[1]);