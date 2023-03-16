//1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function isEvenOrOdd () {
    let num = parseInt(prompt("Pick an integer number"));
    (num % 2) ? document.write(`${num} is an odd numer <br/>`) : document.write(`${num} is an even number <br/>`)
}

// eg: function invoked:
isEvenOrOdd()
