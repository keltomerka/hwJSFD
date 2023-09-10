// Створіть об'єкт cryptoWallet. У гаманці має зберігатись ім'я власника, кілька валют Bitcoin, Ethereum,
// Stellar і в кожній валюті додатково є ім'я валюти, логотип, кілька монет та курс на сьогоднішній день
//день.
//Також в об'єкті гаманець є метод при виклику якого він приймає ім'я валюти та виводить на сторінку
// інформацію.
//"Доброго дня, ... ! На вашому балансі (Назва валюти та логотип) залишилося N монет, якщо ви сьогодні продасте
// їх те, отримаєте ...грн.
// Напишіть функцію isEmpty(obj), яка повертає true, якщо об'єкт не має властивостей, інакше false
let cryptoWallet = {
    nameUser : "",
    money : {
    bitcoin : {
        name : "Bitcoin",
        logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png",
        balance : 3,
        course : 2849539.38,
    },
    ethereum : {
        name : "Ethereum",
        logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
        balance : 5,
        course : 301396.58,
    },
    stellar : {
        name : "Stellar",
        logo : "https://upload.wikimedia.org/wikipedia/commons/5/56/Stellar_Symbol.png",
        balance : 1,
        course : 4.40,
    }
}
};

cryptoWallet.nameUser = prompt('Введіть ваше імя')
const checkMoney = function(){
    let valute = document.getElementById("inp").value.toLowerCase()
    if(valute==="bitcoin"){
    document.write(`Доброго дня, ${cryptoWallet.nameUser} ! На вашому балансі ${cryptoWallet.money.bitcoin.name} <img style="width: 100px;height: 100px;" srс="${cryptoWallet.money.bitcoin.logo}">
        залишилося ${cryptoWallet.money.bitcoin.balance} монет, якщо ви сьогодні продасте
        їх те, отримаєте  ${parseInt(cryptoWallet.money.bitcoin.balance * cryptoWallet.money.bitcoin.course)}грн`)}
    else if(valute==="ethereum"){
    document.write(`Доброго дня, ${cryptoWallet.nameUser} ! На вашому балансі ${cryptoWallet.money.ethereum.name}<img style="width: 100px;height: 100px;" src="${cryptoWallet.money.ethereum.logo}">
        залишилося ${cryptoWallet.money.ethereum.balance} монет, якщо ви сьогодні продасте їх те, отримаєте  ${parseInt(cryptoWallet.money.ethereum.balance * cryptoWallet.money.ethereum.course)}грн`)}
    else if(valute==="stellar"){
        document.write(`Доброго дня, ${cryptoWallet.nameUser} ! На вашому балансі ${cryptoWallet.money.stellar.name}<img style="width: 50px;height: 50px;" src="${cryptoWallet.money.stellar.logo}">
        залишилося ${cryptoWallet.money.stellar.balance} монет, якщо ви сьогодні продасте
        їх те, отримаєте  ${parseInt(cryptoWallet.money.stellar.balance * cryptoWallet.money.stellar.course)}грн`)}
    else{
       alert("Некоректно введені дані, спробуйте ще раз")
    }

}
let show = document.getElementById("btn")
show.onclick = function() {
    checkMoney()
    
}
