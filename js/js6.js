//3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

const rectanglePerimeter = (width, height) => {
    width = parseInt ( prompt ( "Set the width of the rectangle" ) );
    height = parseInt ( prompt ( "Set the height of the rectangle" ) );
    let perimeter = 2 * (width + height)
    document.write(`The rectangle perimeter is ${perimeter}`)
}

rectanglePerimeter()

