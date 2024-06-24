// VAMOS A  CREAR UNA FUNCIÓN PARA ENLAZAR OPERACIONES MATEMÁTICAS A LA PÁGINA WEB:

function LetsDoMath(type)
{
    // LLAMADO A LAS 2 VARIABLES NUMÉRICAS...

    var numberA = parseInt(document.getElementById("numA").value); // NÚMERO 1.
    var numberB = parseInt(document.getElementById("numB").value); // NÚMERO 2.
    var numberC = parseInt(document.getElementById("numC").value); // NÚMERO 3.

    var total = document.getElementById("total");

    // PARA TRABAJAR CON ALGUNAS DE LAS OPERACIONES ARITMÉTICAS, SELECCIONAREMOS UNA DE ÉSTAS
    // UTILIZANDO LA ITERACIÓN "switch"...

    switch(type)
    {
        case "add": // SI ES UNA SUMA...
            total.innerHTML = "Numero total: " + (numberA + numberB + numberC);
            break;
        case "subtract": // SI ES UNA RESTA...
            total.innerHTML = "Numero total: " + (numberA - numberB - numberC);
            break;
        case "multiply": // SI ES UNA MULTIPLICACIÓN...
            total.innerHTML = "Numero total: " + (numberA * numberB * numberC);
            break;
        case "divide": // SI ES UNA DIVISIÓN Y SE TRABAJA CON NÚMEROS DECIMALES Y/O ENTEROS...

            var decimal = parseFloat(numberA / numberB / numberC).toFixed(2); // CUANDO ES UN NÚMERO DECIMAL...

            total.innerHTML = "Numero total: " + decimal;
            break;
    }
}