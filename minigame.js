// PIEDRA PAPEL Y TIJERAS

let elegir = Number(prompt('Elige tu arma\n 1)PIEDRA - 2)PAPEL - 3)TIJERA'));
const maq = Math.floor(Math.random() * 3) + 1
console.log("maquina: " + maq)

if (elegir == 1) {
    console.log('PIEDRA');
    //USUARIO ELIGE PIEDRA
    switch (maq) {
        case 1:
        console.log('PIEDRA EMPATE!');
        break;
        case 2:
        console.log('PAPEL PERDISTE!');
        break;
        case 3:
        console.log('TIJERA GANASTE!');
        break;
    }
} else if (elegir == 2) {
    console.log('PAPEL');
    //USUARIO ELIGE PAPEL
    switch (maq) {
        case 1:
        console.log('PIEDRA GANASTE!');
        break;
        case 2:
        console.log('PAPEL EMPATE!');
        break;
        case 3:
        console.log('TIJERA PERDISTE!');
        break;
    }
} else if (elegir == 3) {
    console.log('TIJERA');
    //USUARIO ELIGE TIJERA
    switch (maq) {
        case 1:
        console.log('PIEDRA PERDISTE!');
        break;
        case 2:
        console.log('PAPEL GANASTE!');
        break;
        case 3:
        console.log('TIJERA EMPATE!');
        break;
    }
        
} else {
    console.log('No elegiste una opcion valida')
}