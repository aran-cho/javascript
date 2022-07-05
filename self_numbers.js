//재오 코드
let sum = 0;
let arr = new Array(10000).fill(true); // array로 해야지 속도가 빨라서 

function self(N){
    [...N.toString()].forEach((nums) => {
        sum += Number(nums)        
    });
     
    sum += Number(i);

    arr[sum] = false;

    sum = 0;
}

for (i =1; i <= 10000; i++){
    self(i);
}

for (i =1; i < 10001; i++){
    if(arr[i]==true){
        console.log(i);
    }
}
