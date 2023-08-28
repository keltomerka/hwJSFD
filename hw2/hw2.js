
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
for(let q=0; q<5; q++){
    document.write('* &nbsp ')
}
for(let a = 0; a < 3; a++){
    document.write('<br>')
    document.write(' * ')
    for(let b=0; b < 1; b++){
        
        document.write(' &nbsp ')
        
        for(let c=0; c < 1; c++){
            document.write('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
            for(let d=0; d < 1 ; d++){
                document.write(' &nbsp; ') 
            }
            for(let e=0; e < 1 ; e++){
                
                document.write(' * ')
                
            }
        }
    } 
    
}
document.write('<br>')
for(let w=0; w<5; w++){
    document.write('* &nbsp ')
}

