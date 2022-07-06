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


let addEvent = document.querySelector("#add");
addEvent.addEventListener('click', add);

let removeEvent = document.querySelector('#remove');
removeEvent.addEventListener('click', remove);

//anonymous는 호이스팅 안되어서 코드적는 순서를 잘 지켜야함