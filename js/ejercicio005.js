/**
 * Crear un array con los siguientes números: 1000, 500, 50, 10, 900, 750, 150, 555, 720, 730. Mostrar los números que cumplen con las siguientes consigna deben ser mayores que 200 y menores que 800.
 */

const numeros = [1000, 500, 50, 10, 900, 750, 150, 555, 720, 730]; 
numeros.sort();
for (const numero of numeros) {

    if (numero >= 200 && numero <= 800) {
        console.log(numero)
    }
}