//2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function includesCapitalLetters (str) {
    if (str.toUpperCase() === str) {
        document.write("The string consists only of uppercase letters" + "<br/>")
    } else if (str.toLowerCase() === str) {
        document.write("The string consists only of lowercase letters" + "<br/>")
    } else {
        document.write("The string consists of both uppercase and lowercase letters" + "<br/>")
    }
}

// example: invoking function:
// includesCapitalLetters("hola mundo")
// includesCapitalLetters("HOLA MUNDO")
// includesCapitalLetters("HOLA mundo")
