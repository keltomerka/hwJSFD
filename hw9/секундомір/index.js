/*Створіть програму секундомір.
            <br>
            * Секундомір матиме 3 кнопки "Старт, Стоп, Скидання"<br>
            * При натисканні на кнопку стоп фон секундоміра має бути червоним, старт - зелений, скидання - сірий
            * Виведення лічильників у форматі ЧЧ:ММ:СС<br>
            * Реалізуйте Завдання використовуючи синтаксис ES6 та стрілочні функції
*/
const btnStart = document.getElementById("start")
const btnStop = document.getElementById("stop")
const btnReset = document.getElementById("reset")
const container = document.getElementById("container")
const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hour = document.getElementById('hour');
let sec1 = 0;
let min1 = 0;
let hour1 = 0;
let interval = null;
function timeGo(){
    sec1++;
    if(sec1 === 60){
        min1++; 
        sec1 = 0;
    }
    if(min1 === 60){
        hour1++; 
        min1 = 0;
    }
    sec.innerText = sec1;
    min.innerText = min1;
    hour.innerText = hour1;
}
btnStart.onclick = () => {
container.removeAttribute("class");
container.classList.add("green");
interval = setInterval(timeGo, 1000);
}
btnStop.onclick = () => {
    container.removeAttribute("class");
    container.classList.add("red")
    clearInterval(interval);
 }
btnReset.onclick = () => {
    container.removeAttribute("class");
    container.classList.add("silver")
    clearInterval(interval);
    sec1 = 0;
    min1 = 0;
    hour1 = 0;
    sec.innerText = sec1;
    min.innerText = min1;
    hour.innerText = hour1;
}