/*
Створити клас Car , Engine та Driver.
Клас Driver містить поля - ПІБ, стаж водіння.
Клас Engine містить поля – потужність, виробник.
Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine. Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч". А також метод toString(), який виводить повну інформацію про автомобіль, її водія і двигуна.

Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.
*/ 

class Engine{
    constructor(power, made){
        this.power = power;
        this.made = made;
    }
}
class Driver{
    constructor(fullName, experience){
        this.fullName = fullName;
        this.experience = experience
    }
}

class Car{
    constructor(brand, classOfcar, weight){
        this.brand = brand;
        this.classOfcar = classOfcar;
        this.weight = weight;
    }
    start(){
        console.log("Go");
    }
    stop(){
        console.log("Stop");
    }
    turnRight(){
        console.log("Turn right");
    }
    turnLeft(){
        console.log("Turn left");
    }
    // toString(){
    //     console.log( this.brand, this.classOfcar, this.weight);
    // }
}
let eng = new Engine(2, 'China')
let  drv = new Driver("Ivan Ivanovych Ivanov",'5 year');
let cr = new Car( "Mercedes", "bissnes", "5tn")
function toString(){
    console.log(drv, eng, cr);
}
toString()


class Lorry extends Car{
    constructor(brand, classOfcar, weight, bodyCapacita){
        super(brand, classOfcar, weight);
        this.bodyCapacita = bodyCapacita
    }
}

class SportCar extends Car{
    constructor(brand, classOfcar, weight, maxSpeed){
        super(brand, classOfcar, weight);
        this.maxSpeed = maxSpeed;
    }
} 
