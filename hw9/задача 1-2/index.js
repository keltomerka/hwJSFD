//Створіть на сторінці div і дайте йому зовнішній відступ 150 пікселів. Використовуючи JS виведіть у консоль відступ
let div = document.querySelector('#d');
let style = getComputedStyle(div);
console.log(style.margin);


/*
 Реалізуйте програму перевірки телефону<br>
            * Використовуючи JS Створіть поле для введення телефону та кнопку збереження<br>
            * Користувач повинен ввести номер телефону у форматі 000-000-00-00 <br>

            * Після того як користувач натискає кнопку зберегти перевірте правильність введення номера, якщо номер
            правильний
            зробіть зелене тло і використовуючи document.location переведіть користувача на сторінку
            https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg
            якщо буде помилка, відобразіть її в діві до input.
 */

 let input = document.createElement("input");
 let btn = document.createElement("button")
 btn.innerHTML = "Send"
 document.body.appendChild(input);
 document.body.appendChild(btn);
 const check = /\d\d\d-\d\d\d-\d\d-\d\d/;
 const divError = document.getElementById('error')
btn.onclick = function(){
    if(check.test(input.value)){
        document.body.style.background = 'green';
        document.location = "https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg"
    }
    else{
        divError.innerText = "Некоректно введенний номер телефону, введіть його у вигляді 000-000-00-00"
    }
}