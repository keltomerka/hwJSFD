const [...inputs] = document.querySelectorAll("input[type='radio']"),
    [...toppings] = document.querySelectorAll(".ingridients img"),
    pizza = {
        pizzaSize: { name: "big", price: 110 },
        pizzaSause: [],
        pizzaTopping: []
    },
    validatorREG = (value, pattern) => pattern.test(value),
    pizzaPrise = {
        pizzaSize: {
            small: 50,
            mid: 90,
            big: 110
        },
        pizzaSause: {
            sauceClassic: {
                price: 30,
                name: "Класік"
            },
            sauceBBQ: {
                price: 35,
                name: "BBQ"
            },
            sauceRikotta: {
                price: 30,
                name: "Білий"
            }

        },
        pizzaTopping: {
            moc1: {
                price: 40,
                name: "Чедер"
            },
            moc2: {
                price: 42,
                name: "Фета"
            },
            moc3: {
                price: 46,
                name: "Моцарелла"
            },
            telya: {
                price: 52,
                name: "Шинка"
            },
            vetch1: {
                price: 33,
                name: "Томати"
            },
            vetch2: {
                price: 37,
                name: "Гриби"
            }
        }
    };

function show(pizza) {
    const price = document.getElementById("price");
    const sauces = document.getElementById("sauces");
    const topping = document.getElementById("topping");
    const sousesCount = {}
    const sauceEl = pizza.pizzaSause.map((e) => {
        const div = document.createElement("div");
        div.innerText = e.name;
        return div
     }

    sauces.innerHTML = "";
    sauces.append(...sauceEl)
 
    const toppingEl = pizza.pizzaTopping.map((e) => {
        const div = document.createElement("div");
        div.innerText = e.name;
        return div
    })
    topping.innerHTML = "";
    topping.append(...toppingEl)

    let totalPrice = 0;
    totalPrice = pizza.pizzaSize.price;
    price.innerText = totalPrice;
}

inputs.forEach(input => {
    input.addEventListener("change", () => {
        pizza.pizzaSize = { name: input.value, price: pizzaPrise.pizzaSize[input.value] }
        show(pizza)
    })
})

// прцюємо з начінкою
toppings.forEach(function (topping) {
    topping.addEventListener("click", () => {
        addImgTable(topping.src)
        if (topping.id.includes("sauce")) {
            pizza.pizzaSause.push(pizzaPrise.pizzaSause[topping.id])
        } else if (topping.dataset.topping.includes("topping")) {
            pizza.pizzaTopping.push(pizzaPrise.pizzaTopping[topping.id])
        }
        show(pizza)
    })
})

function addImgTable(src) {
    const img = document.createElement("img");
    const table = document.querySelector(".table");
    img.src = src;
    table.append(img)
}

// Контакти
const userName = document.getElementById("name"),
    userPhone = document.getElementById("phone"),
    userEmail = document.getElementById("email")

userName.addEventListener("input", () => {
    const patternName = /^[а-яґєїі-]{2,20}$/i;
    if (validatorREG(userName.value, patternName)) {
        userName.classList.add("success")
        userName.classList.remove("error");
        pizza.userName = userName.value;
    } else {
        userName.classList.add("error")
        userName.classList.remove("success");
        pizza.userName = "";
    }
})

userPhone.addEventListener("input", function () {
    const pattern = /^\+380\d{9}$/;
    if (validatorREG(this.value, pattern)) {
        console.log("+");
        this.classList.add("success")
        this.classList.remove("error");
        pizza.userPhone = this.value;
    } else {
        this.classList.add("error")
        this.classList.remove("success");
        pizza.userPhone = "";
    }
})

userEmail.addEventListener("input", function () {
    const pattern = /^[a-z.0-9-]+@[a-z.-0-9]+\.[a-z.]{2,8}$/;
    if (validatorREG(this.value, pattern)) {
        console.log("+");
        this.classList.add("success")
        this.classList.remove("error");
        pizza.userMail = this.value;
    } else {
        this.classList.add("error")
        this.classList.remove("success");
        pizza.userMail = "";
    }
})

show(pizza)

// Банер
const banner = document.getElementById("banner")
banner.addEventListener("mouseover", () =>{
    banner.classList.add("banner-not-position")
    let x = Math.floor(Math.random() * (window.innerWidth - banner.offsetWidth));
    let y = Math.floor(Math.random() * (window.innerHeight - banner.offsetHeight));

    banner.style.bottom = x + "px";
    banner.style.right = y + "px";
    
})

