//3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

const times = 6
let diceA
let diceB
let dicesSumResults = []
for (let i = 0; i < times; i++) {
    diceA = Math.floor(1 + Math.random()*6)
    diceB = Math.floor(1 + Math.random()*6)
    let result = diceA + diceB
    dicesSumResults.push(result)
}

console.log(dicesSumResults)

let resultsFrequency = {}
for (let result of dicesSumResults) {
        if (!(resultsFrequency[result])) {
            resultsFrequency[result] = 1
        } else {
            resultsFrequency[result] += 1
        }
}

let frequencyArray = Object.entries(resultsFrequency)

document.write(`
<table>
<thead>
    <tr>
        <th>Suma</th>
        <th>Apariciones</th>
    </tr>
</thead>
<tbody>
`)

for (let row = 1; row <= frequencyArray.length; row++ )
document.write(`
<tr>
    <td>${frequencyArray[row-1][0]}</td>
    <td>${frequencyArray[row-1][1]}</td>
</tr>
`)

document.write(`
</tbody>
</table>`)