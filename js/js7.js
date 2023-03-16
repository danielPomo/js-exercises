//4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function showXTable (num) {
    num = parseInt( prompt( "Pick a number to get its multiplication cheatsheet" ) )
    document.write(`
    <table>
        <thead>
            ${num} times ...
        </thead>
        <tbody>
            <tr>`)

    for (let times = 1; times <= 10; times++) {
        document.write(`<td>${times}</td>`)
    }
    
    document.write(`
    </tr>
    <tr>`)
    
    for (let times = 1; times <= 10; times++) {
        document.write(`<td>${times * num}</td>`)
    }

    document.write(`
    </tr>
    </tbody>
</table>`)
}

showXTable(3)