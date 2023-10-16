// function req(url, cb) {
//     const loader = document.querySelector(".modal")
//     loader.classList.add("show")
//     const newReq = new XMLHttpRequest();
//     newReq.open("GET", url);
//     newReq.addEventListener("readystatechange", () => {
//         console.log(newReq.readyState);
//         if (newReq.readyState === 4 && newReq.status >= 200 && newReq.status < 300) {
//             cb(JSON.parse(newReq.response));
//             loader.classList.remove("show")
//         } else if (newReq.readyState === 4) {
//             loader.classList.remove("show")
//             throw new Error("Помилка у запиті");
//         }
//     })
//     newReq.send()
// } 

// req("https://swapi.dev/api/", createNavigationMenu)
// const nav = document.querySelector("nav")
// function createNavigationMenu (menu = {}) {
//     const navItem = Object.entries(menu);
    
//     const navElement = navItem.map(([keys, values])=>{
//          const div = document.createElement("div");
//          div.innerText = keys;
//          div.classList.add("link-item");
//          div.addEventListener("click", () => {
            
//          })
//          return div
//     })

//     nav.append(...navElement)
// };
const nav = document.querySelector("nav")
const peopleBtn = document.getElementById("peopleBtn");
const planetsBtn = document.getElementById("planetsBtn");
const filmBtn = document.getElementById("filmBtn");
const speciesBtn = document.getElementById("speciesBtn");
function clearInfo() {
    const clearInfo = document.querySelectorAll('.card');
    clearInfo.forEach(info => {
        info.remove();
    });
}
// people
peopleBtn.addEventListener('click', () => {
    clearInfo();
    const getPeople = new XMLHttpRequest();
    getPeople.open("GET", "https://swapi.dev/api/people/");
    getPeople.send();

    getPeople.addEventListener("load", () => {
        const data = JSON.parse(getPeople.response);
        createCardPeople(data.results);
    });
  
    function createCardPeople(data) {
        data.forEach(plp => {
            const card = document.createElement("div");
            const nameEL = document.createElement("div");
            const heightEL = document.createElement("div");
            const massEl = document.createElement("div");
            const birthEl = document.createElement("div");
            const genderEL = document.createElement("div");
            card.classList.add("card")
            card.append(nameEL, heightEL, massEl, birthEl, genderEL);
            nameEL.innerText = `Name: ${plp.name}`;
            heightEL.innerText = `Height: ${plp.height}`;
            massEl.innerText = `Mass: ${plp.mass}`;
            birthEl.innerText = `Birth-year: ${plp.birth_year}`;
            genderEL.innerText = `Gender: ${plp.gender}`;
            document.body.appendChild(card); 
        });
    }
    
});
// planets
planetsBtn.addEventListener('click', () => {
    clearInfo();
    const getPlanets = new XMLHttpRequest();
    getPlanets.open("GET", "https://swapi.dev/api/planets/");
    getPlanets.send();

    getPlanets.addEventListener("load", () => {
        const dataPlanet = JSON.parse(getPlanets.response);
        createCardPlanets(dataPlanet.results);
    });
  
    function createCardPlanets(dataPlanet) {
        dataPlanet.forEach(plts => {
            const cardP = document.createElement("div");
            const nameELP = document.createElement("div");
            const rotationEL = document.createElement("div");
            const orbitalEl = document.createElement("div");
            const diameterEl = document.createElement("div");
            const climateEL = document.createElement("div");
            const gravityEL = document.createElement("div");
            cardP.classList.add("card")
            cardP.append(nameELP, rotationEL, orbitalEl, diameterEl, climateEL, gravityEL);
            nameELP.innerText = `Name: ${plts.name}`;
            rotationEL.innerText = `Rotation period: ${plts.rotation_period}`;
            orbitalEl.innerText = `Orbital period: ${plts.orbital_period}`;
            diameterEl.innerText = `Diameter: ${plts.diameter}`;
            climateEL.innerText = `Climate: ${plts.climate}`;
            gravityEL.innerText = `Gravity: ${plts.gravity}`;
            document.body.appendChild(cardP); 
        });
    }
});
// films
filmBtn.addEventListener('click', () => {
    clearInfo();
    const getFilm = new XMLHttpRequest();
    getFilm.open("GET", "https://swapi.dev/api/films/");
    getFilm.send();

    getFilm.addEventListener("load", () => {
        const data = JSON.parse(getFilm.response);
        createCardFilm(data.results);
    });
    function createCardFilm(data) {
        data.forEach(flms => {
            const cardF = document.createElement("div");
            const titleEL = document.createElement("div");
            const episodeEL = document.createElement("div");
            const openingEl = document.createElement("div");
            const directorEl = document.createElement("div");
            const producerEL = document.createElement("div");
            const releaseEL = document.createElement("div");
            cardF.classList.add("card")
            cardF.append(titleEL, episodeEL, openingEl, directorEl, producerEL, releaseEL);
            titleEL.innerText = `Title: ${flms.title}`;
            episodeEL.innerText = `Episode number: ${flms.episode_id}`;
            openingEl.innerText = `Opening: ${flms.opening_crawl}`;
            directorEl.innerText = `Director: ${flms.director}`;
            producerEL.innerText = `Producer: ${flms.producer}`;
            releaseEL.innerText = `Release Date: ${flms.release_date}`;
            document.body.appendChild(cardF); 
        });
    }
})
//species
speciesBtn.addEventListener('click', () => {
    clearInfo();
    const getSpecies = new XMLHttpRequest();
    getSpecies.open("GET", "https://swapi.dev/api/species/");
    getSpecies.send();

    getSpecies.addEventListener("load", () => {
        const data = JSON.parse(getSpecies.response);
        createCardSpecies(data.results);
    });
    function createCardSpecies(data) {
        data.forEach(spc => {
            const cardS = document.createElement("div");
            const nameEL = document.createElement("div");
            const classificationEL = document.createElement("div");
            const designationEl = document.createElement("div");
            const languageEL = document.createElement("div");
            const lifespanEL = document.createElement("div");
            cardS.classList.add("card")
            cardS.append(nameEL, classificationEL, designationEl, languageEL, lifespanEL);
            nameEL.innerText = `Name: ${spc.name}`;
            classificationEL.innerText = `Classification: ${spc.classification}`;
            designationEl.innerText = `Designation: ${spc.designation}`;
            languageEL.innerText = `Language: ${spc.language}`;
            lifespanEL.innerText = `Lifespan: ${spc.average_lifespan}`;
            document.body.appendChild(cardS); 
        });
    }
})
// vehicles
vehiclesBtn.addEventListener('click', () => {
    clearInfo();
    const getVehicles = new XMLHttpRequest();
    getVehicles.open("GET", "https://swapi.dev/api/vehicles/");
    getVehicles.send();

    getVehicles.addEventListener("load", () => {
        const data = JSON.parse(getVehicles.response);
        createCardVehicles(data.results);
    });
    function createCardVehicles(data) {
        data.forEach(vch => {
            const cardV = document.createElement("div");
            const nameEL = document.createElement("div");
            const modelEL = document.createElement("div");
            const manufacturerEl = document.createElement("div");
            const costEL = document.createElement("div");
            const passengersEL = document.createElement("div");
            cardV.classList.add("card")
            cardV.append(nameEL, modelEL, manufacturerEl, costEL, passengersEL);
            nameEL.innerText = `Name: ${vch.name}`;
            modelEL.innerText = `Model: ${vch.model}`;
            manufacturerEl.innerText = `Manufacturer: ${vch.manufacturer}`;
           costEL.innerText = `Cost: ${vch.cost_in_credits}`;
           passengersEL.innerText = `Passengers: ${vch.passengers}`;
            document.body.appendChild(cardV); 
        });
    }
})
// starships
starshipsBtn.addEventListener('click', () => {
    clearInfo();
    const getStarships = new XMLHttpRequest();
    getStarships.open("GET", "https://swapi.dev/api/starships/");
    getStarships.send();

    getStarships.addEventListener("load", () => {
        const data = JSON.parse(getStarships.response);
        createCardStarships(data.results);
    });
    function createCardStarships(data) {
        data.forEach(sip => {
            const cardSt = document.createElement("div");
            const nameEL = document.createElement("div");
            const modelEL = document.createElement("div");
            const manufacturerEl = document.createElement("div");
            const costEL = document.createElement("div");
            const passengersEL = document.createElement("div");
            cardSt.classList.add("card")
            cardSt.append(nameEL, modelEL, manufacturerEl, costEL, passengersEL);
            nameEL.innerText = `Name: ${sip.name}`;
            modelEL.innerText = `Model: ${sip.model}`;
            manufacturerEl.innerText = `Manufacturer: ${sip.manufacturer}`;
           costEL.innerText = `Cost: ${sip.cost_in_credits}`;
           passengersEL.innerText = `Passengers: ${sip.passengers}`;
            document.body.appendChild(cardSt); 
        });
    }
})