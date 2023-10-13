/*
Дано інпути. Зробіть так, щоб усі інпути при втраті мишки з  фокусу перевіряли свій вміст на правильну кількість символів. 
Скільки символів має бути в інпуті, зазначається в атрибуті data-length. 
Якщо вбито правильну кількість, то межа інпуту стає зеленою, якщо неправильна – червоною.
 */
const inputs = document.getElementsByClassName("input");
const data = document.getElementById("check");
 
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("blur", function()  {
        if (this.value.length === parseInt(data.value)) {
            this.classList.remove("red");
            this.classList.add("green");
        } else {
            this.classList.remove("green");
            this.classList.add("red");
        }
    });
}
