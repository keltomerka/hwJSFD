/*- При завантаженні сторінки показати користувачеві поле введення (`input`) з написом `Price`. Це поле буде служити для введення числових значень
- Поведінка поля має бути такою:
- При фокусі на полі введення – у нього має з'явитися рамка зеленого кольору. При втраті фокусу вона пропадає.
- Коли забрали фокус з поля - його значення зчитується, над полем створюється `span`, в якому має бути виведений текст: 
. 
Поруч із ним має бути кнопка з хрестиком (`X`). Значення всередині поля введення фарбується зеленим.
- При натисканні на `Х` - `span` з текстом та кнопка `X` повинні бути видалені.
- Якщо користувач ввів число менше 0 - при втраті фокусу підсвічувати поле введення червоною рамкою, 
під полем виводити фразу - `Please enter correct price`. `span` зі значенням при цьому не створюється.*/
const input = document.querySelector("input")
let span = document.querySelector("span")
const btn = document.getElementById("b")
btn.classList.add("withot")
input.addEventListener("mouseover", () => {
    input.classList.add("green")
})
input.onmouseout = function(){
    input.classList.remove("green");
    btn.classList.remove("withot")
    span.classList.remove("withot")
    if(input.value < 0){
        input.classList.add("red")
        let p = document.createElement("p")
        p.textContent = "Please enter correct price"
        document.body.appendChild(p)
    } else{
        input.classList.remove("red")
        span.innerText = input.value
    }
}

btn.addEventListener("click", () => {
    span.classList.add("withot")
    btn.classList.add("withot")
})