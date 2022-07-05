let sum = 0;
let arr = new Array(10000).fill(true);// array로 해야지 속도가 빨라서 

function self(N){
    [...N.toString].forEach((nums) => {
        sum += Number(nums)        
    });
        
}
