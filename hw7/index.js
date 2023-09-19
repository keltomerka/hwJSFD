/*
//1 
Створити клас Animal та розширюючі його класи Dog, Cat, Horse.
Клас Animal містить змінні food, location і методи makeNoise, eat, sleep. Метод makeNoise, наприклад, 
може виводити на консоль "Така тварина спить". Dog, Cat, Horse перевизначають методи makeNoise, eat.
Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.
Створіть клас Ветеринар, у якому визначте метод void treatAnimal(Animal animal). Нехай цей метод роздруковує
 food і location тварини, що прийшла на прийом.
У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас.
 У циклі надсилайте їх на прийом до ветеринара.
*/

class Animal{
    constructor(food, location){
        this.food = food;
        this.location = location
    }
    makeNoise(){
        console.log("шумить")
    }
    eat(){
        console.log("їсть")
    }
    sleep(){
        console.log("спить")
    }
}

class Dog extends Animal{
    constructor(name, age, breed){
        super();
        this.name = name;
        this.age = age;
        this.breed = breed
    }
    makeNoise(){
        console.log(`${this.name} гавкає`)
    }
    eat(){
        console.log(`${this.name} їсть`)
    }
}

let d = new Dog("Bobo","16","York")
d.makeNoise()

class Cat extends Animal{
    constructor(name, age, hasTail){
        super();
        this.name = name;
        this.age = age;
        this.hasTail = hasTail
    }
    makeNoise(){
        console.log(`${this.name} мяукає`)
    }
    eat(){
        console.log(`${this.name} їсть`)
    }
}

let c = new Cat("Momo","5",true)
c.makeNoise()

class Horse extends Animal{
    constructor(name, age, color){
        super();
        this.name = name;
        this.age = age;
        this.color = color
    }
    makeNoise(){
        console.log(`${this.name} іогогокає`)
    }
    eat(){
        console.log(`${this.name} їсть`)
    }
}

let h = new Horse("Gogo","5","black")
h.makeNoise()

class Vet extends Animal{
    constructor(food, location){
        super(food, location)
        
    }
    treatAnimal(){
        console.log(this.food, this.location)
    }
    main(){
        const typeOfAnimal = ["собака","кіт","кінь"];
        for(let i = 0; i < 3; i++){
            typeOfAnimal[i]
            console.log(typeOfAnimal[i] + ' мусить відвідати ветеринара')
        }
    }
}
let v = new Vet("Трава", "Ферма")
v.treatAnimal()
v.main()

/*
Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.
*/

class MyString{
    constructor(str){
        this.str = str
    }
    revers(){
        console.log(this.str.split("").reverse().join(""))
    }
    ucFirs(){
        console.log(this.str[0].toUpperCase() + this.str.slice(1))
    }
    ucWord(){
        console.log(this.str.split(" ").map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join(' '))
    }
}

let a = new MyString("Becouse i am programist")
a.revers()
a.ucFirs()
a.ucWord()