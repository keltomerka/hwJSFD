var x = 6;
var y = 14;
var z = 4;
x += y - x++ * z;
document.write(x + "<br/><hr/>")
// спочатку рахується х++*z тут приорітет більший і це дорівнює 24. далі y-x++*z і це = -10 адже у - більший приорітет ніж у +=. і далі до цього додаємо x і виходить 6+(-10)=-4
x = 6;
y = 14;
z = 4;
z = --x - y * 5 ;
document.write(z + "<br/><hr/>")
// --x = -5 так як --x означає відразу відняти 1 від числа, і далі --х - y*5(14*5=70) і виходить 5-70=-65
x = 6;
y = 14;
z = 4;
y /= x + 5 % z;
document.write(y + "<br/><hr/>") 
// цей приклад можемо переписати як y / (x + 5%z), 5 % z = 1, 6+1=7 і далі y / 7 = 14 / 7 = 2
x = 6;
y = 14;
z = 4;
result = z - x++ + y * 5;
document.write(result + "<br/><hr/>")
// z-x++=4-6=-2 і y*5=70(14*5=70) тому -2+70=68
x = 6;
y = 14;
z = 4;
x = y - x++ * z;
document.write(x + "<br/><hr/>")
// x++ * z = 6*4=24  і далі ми y - 24 = 14-24 = -10