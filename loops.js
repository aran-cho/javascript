// **while
// let count = 0;
// let condision = count < 100; 한다면 조건문에 condision 넣기-> 보통 직관적으로 아래와같이 넣음
// while (count < 100) {
//     console.log('in while : ' +count);
//     count = count +1; 
// } //블레이스 밖을 나갈수없음, 무한반복
//조건문은 조건에 변수를 넣어야함. (무한반복 방지)
 
//**for
// for (let count = 0; count < 5; count = count +1){
//     console.log("in for with count : "+count);
// }
//1)let~=0으로하고 2)조건문안에 비교, 3)그다음 증가 했던 while문을 생각하여 for문 짜기


// let fruits = ["apple", "banana", "orange"];
// for(let index = 0; index <= 2; index++){
//     console.log("in for with fruits : "+fruits[index]);
//     let fruit = fruits[index];
// }

//**iteral
// for(let fruit of fruits) {
//     console.log("fruit : "+fruit);
// }

// let animals = ["tiger", "lion"];
// for(let animal of animals){
//     console.log("animals :" +animal)
// }

//한번 더 확인
let mixins = ["apple", false, "banana", 4 , "orange", ["tiger", "lion"]];
for (let mixin of mixins){
    console.log("mixins:" +mixin);
    
    // console.log(!(((typeof mixin) =='Number') || ((typeof mixin) =='Boolean') || ((typeof mixin) =='String'))
    // );

    let condision = !(((typeof mixin) =='Number') || ((typeof mixin) =='Boolean') || ((typeof mixin) =='String'));
    if (condision){
        for(let animal of mixin){
            console.log("animals :" +animal);
            }
    }
}

//foreach
let foreach = function(mixin, index){
    console.log("mixins:" + mixin);
    
    // console.log(!(((typeof mixin) =='Number') || ((typeof mixin) =='Boolean') || ((typeof mixin) =='String'))
    // );

    let condision = !(((typeof mixin) =='Number') || ((typeof mixin) =='Boolean') || ((typeof mixin) =='String'));
    if (condision){
        for(let animal of mixin){
            console.log("animals :" + animal);
            }
    }
}

//let ~ of ~ 의 단점 : 인덱스(순서)를 모름-> foreaxh사용
mixins.forEach(foreach);
console.log("programa end ! ");


//==(anonymous사용 )
mixins.forEach (function(mixin, index){
    console.log("mixins:" + mixin);
    
    // console.log(!(((typeof mixin) =='Number') || ((typeof mixin) =='Boolean') || ((typeof mixin) =='String'))
    // );

    let condision = !(((typeof mixin) =='Number') || ((typeof mixin) =='Boolean') || ((typeof mixin) =='String'));
    if (condision){
        for(let animal of mixin){
            console.log("animals :" + animal);
            }
    }
})

//==(최종적으로 많이 사용 : arraow function(=>) 사용)
mixins.forEach ( (mixin, index) =>{
    console.log("mixins:" + mixin);
    
    // console.log(!(((typeof mixin) =='Number') || ((typeof mixin) =='Boolean') || ((typeof mixin) =='String'))
    // );

    let condision = !(((typeof mixin) =='Number') || ((typeof mixin) =='Boolean') || ((typeof mixin) =='String'));
    if (condision){
        for(let animal of mixin){
            console.log("animals :" + animal);
            }
    }
})

console.log("programa end ! ");


// let mixins = ["apple",false, "banana",4, "orange",["tiger", "lion"]];
// for(let mixin of mixins){
//     console.log("mixins :" +mixins[5])
// }


