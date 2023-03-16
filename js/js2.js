//2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
//Mostrar la longitud del arreglo.
//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
//Añade en última posición la ciudad de París.
//Escribe por pantalla el elemento que ocupa la segunda posición.
//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let citiesArray = []

let city = prompt ("Write a city name")
if (city !== "") {
    while (city) {
        citiesArray.push(city)
        city = prompt("Write another city name")
    }
} else {
    alert("Cities names cannot be empty strings")
}

citiesArray.push("Paris")

citiesArray[2] = "Barcelona"

document.write(`The following array has been created: [${citiesArray}] <br/>
Array length: ${citiesArray.length} <br/>
1st city: ${citiesArray[0] || "No se ha definido una ciudad en esta posición"} <br/>
2nd city: ${citiesArray[1] || "No se ha definido una ciudad en esta posición"} <br/>
3rd city: ${citiesArray[2] || "No se ha definido una ciudad en esta posición"} <br/>`)



