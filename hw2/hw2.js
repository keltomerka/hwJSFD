
for(let a = 0; a < 5; a++){
    for(let b=0; b < 10; b++){
        document.write(' * ')
    }

    document.write('<br>')
}
document.write('<br>' + '<hr>')

// Ромб

for(let a = 0; a < 1; a++){
    document.write('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*')
    document.write('<br>')
}
for(let a = 0; a < 2; a++){
    document.write('&nbsp;&nbsp;&nbsp;&nbsp;*')
}
document.write('<br>')
for(let a = 0; a < 3; a++){
    document.write('&nbsp; * ')
}
document.write('<br>')
for(let a = 0; a < 2; a++){
    document.write('&nbsp;&nbsp;&nbsp;&nbsp;*')
}
document.write('<br>')
for(let a = 0; a < 1; a++){
    document.write('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*')
    document.write('<br>')
}
document.write('<br>' + '<hr>')

// Рівностороній трикутник
for(let a = 0; a < 1; a++){
    document.write('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*')
    document.write('<br>')
}
for(let a = 0; a < 2; a++){
    document.write('&nbsp;&nbsp;&nbsp;&nbsp;*')
}
document.write('<br>')
for(let a = 0; a < 3; a++){
    document.write('&nbsp; * ')
}
document.write('<br>' + '<hr>')

// Прямокутний трикутник

for(let a=0; a<1;a++){
    document.write(' * ')
}
document.write('<br>')
for(let a=0; a<2;a++){
    document.write(' * ')
}
document.write('<br>')
for(let a=0; a<3;a++){
    document.write(' * ')
}
document.write('<br>')
for(let a=0; a<4;a++){
    document.write(' * ')
}
document.write('<br>' + '<hr>')

// Порожній квадрат

for(let a = 0; a < 10; a++){
    
    for(let a = 0; a < 4; a++){
        document.write('2')
        
    }
    document.write('1')
}
document.write('<br>')

for(let a = 0; a < 9; a++){
    document.write('3')
    
}