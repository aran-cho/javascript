["apple", "banana", "orange", "mellon"];

apple = "apple";
//object 순서 없음
// {apple : "apple", banana : "banana", orange :  "orange", mellon : "mellon"}

let name = "George"; 
let Species = "gorilla";
let foodsEaten = ["apple", "banana", "orange"];
//같은 종류라 생각하는걸로 묶고 싶을때 objcet 사용
//세미콜론 대신 쉼표(콜론)으로 구분
let monkey = {
    name : "George",
    Species : "gorilla",
    foodsEaten : ["apple", "banana", "orange"]
}

//monkey는 그안에 있는 변수의 기능을 흡입할 수 있음
monkey.name
monkey.foodsEaten[2] //orange

//값을 변경
monkey.name = "Jane"
monkey.foodsEaten[1] = "mellon"


// let sumTwoAnonymous = function (x,z){
//     let result = x + z
//     return result;
// }
let monkey = {
    name : "George",
    Species : "gorilla",
    foodsEaten : ["apple", "banana", "orange"],  
    sumTwoAnonymous : function (x,z){
            let result = x + z
            return result;
        }
}
//anonymous가 object안으로 들어간 형태



