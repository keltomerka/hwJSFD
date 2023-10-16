function req(url, cb) {
    const loader = document.querySelector(".modal")
    loader.classList.add("show")
    const newReq = new XMLHttpRequest();
    newReq.open("GET", url);
    newReq.addEventListener("readystatechange", () => {
        console.log(newReq.readyState);
        if (newReq.readyState === 4 && newReq.status >= 200 && newReq.status < 300) {
            cb(JSON.parse(newReq.response));
            loader.classList.remove("show")
        } else if (newReq.readyState === 4) {
            loader.classList.remove("show")
            throw new Error("Помилка у запиті");
        }
    })
    newReq.send()
} 

req("https://swapi.dev/api/", createNavigationMenu)

function createNavigationMenu (menu = {}) {
    const navItem = Object.entries(menu);
    const nav = document.querySelector("nav")
    const navElement = navItem.map(([keys, values])=>{
         const div = document.createElement("div");
         div.innerText = keys;
         div.classList.add("link-item");
         div.addEventListener("click", () => {
            
         })
         return div
    })

    nav.append(...navElement)
}

function people (){
    
}
