
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//  alert('bienvenido')
var num = getRandomInt(1, 1000000);
console.log(num);
var contador = 0;
do {
    numero = prompt('acierta el numero')
    if (isNaN(numero)) {
        contador++
        if (num > numero) {
            consola.log("el número es Menor")
        } if (num < numero) {
            console.log("el número es Mayor");
        }
    }
} while (num != numero)
console.log(" EXITO")
console.log('cantidad de intentos ' +contador)
