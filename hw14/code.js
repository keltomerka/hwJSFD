window.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector(".preloader");
    setTimeout(() => { preloader.classList.add("hide") }, 3000)
})

const locationPlanet = "https://rickandmortyapi.com/api/location";
const randomIDLocation = Math.floor(Math.random() * 126) + 1;
const body = document.querySelector(".characters .body")
/*
const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("+")
    }, 13000)
    setTimeout(() => {
        reject("+")
    }, 5000)
})

pro.then((info)=>{
    console.log(info);
}).catch(()=>{})
*/

//const req = fetch("https://rickandmortyapi.com/api/location");
/*
req.then((data)=>{
   return data.json()
}).then(data => {
    console.log(data);
})
*/

const req = async function (url) {
    const data = await fetch(url);
    if (data.status === 200) {
        return data.json()
    } else {
        throw new Error("Error Fetch :" + data.status)
    }
}

function showRandomLoaction({ name, type, dimension, created }) {
    document.querySelector("#name .data").innerHTML = name;
    document.querySelector("#type .data").innerHTML = type;
    document.querySelector("#dimension .data").innerHTML = dimension;
    document.querySelector("#created .data").innerHTML = created;
}

req("https://rickandmortyapi.com/api/character/")
    .then(cars => {
        if (!Array.isArray(cars.results)) throw new Error("Ми отримали не масив :(")
        nextAndPrev(cars.info)
        cars.results.map(car => {
            createElementCharacters(car)
        })
    })

function createElementCharacters({ image, name, status, id }) {
    const card = document.createElement("div");
    const imageEL = document.createElement("img");
    const nameEL = document.createElement("div");
    const statusEL = document.createElement("div");
    const go = document.createElement("button");
    const addFavirite = document.createElement("button");
    const info = document.createElement("div");

    card.classList.add("card");
    imageEL.classList.add("card-image");
    go.classList.add("go");
    addFavirite.classList.add("start");
    info.classList.add("characters-iformation");

    card.append(imageEL, go, addFavirite, info);
    info.append(nameEL, statusEL);

    imageEL.src = image;
    imageEL.alt = name;
    nameEL.innerHTML = `<div><div class="bold">Name</div><div>${name}</div></div>`;
    statusEL.innerHTML = `<div><div class="bold">Status</div><div>${status}</div></div>`;

    body.append(card)

    go.addEventListener("click", () => {
        // Відобразити модалку з даними.
    })

    // записати почтоного пересонажа до себе в локальне сховище.
    addFavirite.addEventListener("click", () => {
        if (!localStorage.favorite) {
            const arr = [{}];
            localStorage.favorite = JSON.stringify(arr)
            return
        }
        localStorage.favorite = JSON.stringify(arr)
    })
}

//При настиску оновити дані карточок, показати нову порцію
function nextAndPrev({ prev, next }) {
    const _next = document.querySelector("#next");
    const _prev = document.querySelector("#prev");

    _next.addEventListener("click", () => {
        body.innerHTML = "";
    })
    _prev.addEventListener("click", () => {
        body.innerHTML = "";
    })
}

req(locationPlanet + "/" + randomIDLocation)
    .then((data) => {
        showRandomLoaction(data)
    })