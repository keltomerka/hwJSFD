const ul = document.getElementById("list");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
let chosenElement = null;
btn1.onclick = function(){
    if(chosenElement !== null){
        chosenElement.classList.remove("select");
    }
    ul.firstElementChild.classList.add("select")
    chosenElement = ul.firstElementChild;
}
btn2.onclick = function(){
    if(chosenElement !== null){
        chosenElement.classList.remove("select");
    }
    ul.lastElementChild.classList.add("select");
    chosenElement = ul.lastElementChild;
}
btn3.onclick = function(){
    if(chosenElement !== null){
        chosenElement.classList.remove("select");
    }
    const nextElement = chosenElement.nextElementSibling;
        if (nextElement !== null) {
            nextElement.classList.add("select");
            chosenElement = nextElement;
        }else{
            chosenElement = ul.firstElementChild;
            chosenElement.classList.add("select");
        } 
}
 
btn4.onclick = function(){
    if(chosenElement !== null){
        chosenElement.classList.remove("select");
    }
    const previousElement = chosenElement.previousElementSibling;
        if (previousElement !== null) {
            previousElement.classList.add("select");
            chosenElement = previousElement;
        }else{
            chosenElement = ul.lastElementChild;
            chosenElement.classList.add("select");
        } 
}

btn5.onclick = function(){
    let liAddEnd = document.createElement('li');
    liAddEnd.innerText = 'Новий елемент'
    ul.appendChild(liAddEnd)
}
btn6.onclick = function(){
    let firstLi = ul.firstElementChild;
    ul.removeChild(firstLi)
}
btn7.onclick = function(){
    let lastLi = ul.lastElementChild;
    ul.removeChild(lastLi)
}
btn8.onclick = function(){
    const middleLi = ul.children[4]
    ul.removeChild(middleLi); 
}
btn9.onclick = function(){
    let liAddStart = document.createElement('li');
    liAddStart.innerText = 'Новий елемент'
    ul.insertBefore(liAddStart, ul.firstChild)
}