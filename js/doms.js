// let ulTag = document.querySelector('ul');
// let liTag = document.createElement('li');
// let liText = document.createTextNode('Sony')
// liTag.appendChild(liText);
// ulTag.appendChild(liTag);
// //콘솔을 활용


let remove = function (first){
    console.log(`remove: ${first}`)

    let ulTag = document.querySelector('ul');
    ulTag.lastChild.remove();

    return true;
}

function add(first='0'){
    console.log(`add : ${first}`)

    let ulTag = document.querySelector('ul');
    let liTag = document.createElement('li');
    let liText = document.createTextNode('Sony')
    liTag.appendChild(liText);
    ulTag.appendChild(liTag);

    return true;

}




// arrow function (단순화시키기)->하단에 넣기위해 따로 써놓음
// (first='0' )=>{
//     console.log(`add : ${first}`)

//     let ulTag = document.querySelector('ul');
//     let liTag = document.createElement('li');
//     let liText = document.createTextNode('Sony')
//     liTag.appendChild(liText);
//     ulTag.appendChild(liTag);

//     return true;
// }

let addEvent = document.querySelector("#add");
// addEvent.addEventListener('click', add);
// addEvent.addEventListener('click', (first='0' )=>{
//     console.log(`add : ${first}`)

//     let ulTag = document.querySelector('ul');
//     let liTag = document.createElement('li');
//     let liText = document.createTextNode('Sony')
//     liTag.appendChild(liText);
//     ulTag.appendChild(liTag);

//     return true;
// });




addEvent.addEventListener('click', (event)=>{
    // console.log(event);
    console.log(event.target.innerText);

    let ulTag = event.target;
    let liTag = document.createElement('li');
    let liText = document.createTextNode('Sony')
    liTag.appendChild(liText);
    ulTag.appendChild(liTag);
//버튼 클릭했을때 소니가 바로 빝에 붙음
    return true;
});

// =
// function add(event){
//     console.log(`add : ${event}`)

//     let ulTag = document.querySelector('ul');
//     let liTag = document.createElement('li');
//     let liText = document.createTextNode('Sony')
//     liTag.appendChild(liText);
//     ulTag.appendChild(liTag);

//     return true;

// }








let removeEvent = document.querySelector('#remove');
removeEvent.addEventListener('click', remove);

//anonymous는 호이스팅 안되어서 코드적는 순서를 잘 지켜야함