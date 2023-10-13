
const numbers = document.querySelectorAll('.num');
const display = document.getElementById('input');
const acounts = document.querySelectorAll('.pink');
const idivid = document.getElementById("idivid");
const remembers = document.querySelectorAll(".remember");
const cleanMemor = document.getElementById("cleanMemor")
let firstNumber = '';
let secondNumber = '';
let res = "";
let operation = null;
let memory = null;
let memoryClean = false; 
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (number.value === ".") {
            if (operation === null) {
                if (!firstNumber.includes('.') && firstNumber !== '') {
                    firstNumber += '.';
                    display.value = firstNumber;
                }
            } else {
                if (!secondNumber.includes('.') && secondNumber !== '') {
                    secondNumber += '.';
                    display.value = secondNumber;
                }
            }
        } else {
            if (operation === null) {
                firstNumber += number.value;
                display.value = firstNumber;
            } else {
                secondNumber += number.value;
                display.value = secondNumber;
            }
        }
    });
});
document.querySelector('.clean').addEventListener('click', () => {
    display.value = '';
    firstNumber = '';
    secondNumber = '';
    res = '';
    operation = null;
});
const action = function(){
    if (firstNumber !== '' && secondNumber !== ''){
        if (operation === '+') {
            res = parseInt(firstNumber) + parseInt(secondNumber);
        } else if (operation === '-') {
            res = parseInt(firstNumber) - parseInt(secondNumber);
        } else if (operation === '*') {
            res = parseInt(firstNumber) * parseInt(secondNumber);
        } else if (operation === '/') {
            if (secondNumber === '0') {
                display.value = 'На нуль ділити не можна!';
                return;
            }
            res = parseInt(firstNumber) / parseInt(secondNumber);
        }
        display.value = res;
        secondNumber = '';
    }
    
};

acounts.forEach(acount => {
    acount.addEventListener('click', () => {
        action()
        operation = acount.value;
    })
})
idivid.addEventListener("click", () => {
    action();
    display.value = res;
});
remembers.forEach(remember =>{
    remember.addEventListener("click", () => {
        if (display.value !== '') {
            if (memory === null) {
                memory = parseFloat(display.value);
            } else {
                memory = parseFloat(display.value);
            }
        }
        display.value = '';
        memoryClean = false;
    })
})
cleanMemor.onclick = function(){
    if (!memoryClean) {
        if (memory !== null) {
            display.value = 'm' + memory;
        }
        memoryClean = true;
    } else {
        memory = null;
        display.value = '';
        memoryClean = false;
    }
}
