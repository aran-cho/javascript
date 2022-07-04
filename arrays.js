// array is in order
let fruits = ["apple", "banana", "orange"];
// fruits[2];
//순서적으로 뭔가 이루어져야할때 사용->메뉴, 게시판 등등

fruits.push("grape");
fruits.pop();
// 맨뒤에서부터 빼주는 기능
fruits.splice(1,1);
fruits.includes("orange");
fruits.join(" and ");


console.log("")

let animals = ["tiger", "lion"];
let mixin = animals.concat(fruits);

// 문자, 숫자, 불런 , 배열을 넣을 수 있음
let mixins = ["apple",false, "banana",4, "orange",["tiger", "lion"]];
//->변수의 종류 상관없이 넣을 순 있지만 유지보수 불편함
// "end" --> ["e", "n", "d", "\0"];

console.log("program end ! ")


