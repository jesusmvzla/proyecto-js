
alert("¡Bienvenido a SimpleBudget (alpha 0.02)! Vamos a acompañarte a llevar tu presupuesto. ¡Presione OK para continuar!");


let promptMonto = 0;
let promptAhorro = 0;
let elegirMenu;
let gastos = [];
let totalGastos = 0;
let valorAhorrado = 0;
let valorReal = 0;


promptMonto = parseInt(prompt("Antes de iniciar, introduzca el valor neto de sus ingresos mensuales (solo números, sin puntos, ni comas ni símbolos como $):"));
valorReal = promptMonto
console.log("Ingresos disponibles: $"+valorReal)

promptAhorro = 0;
console.log("Ahorro disponible: $"+promptAhorro)

let continuar = true;

function calcularAhorro (ingresos, porcentaje) {
return (porcentaje/100)*ingresos

}

while (continuar) {
    let opcionMenu = prompt(`SimpleBudget (alpha 0.02)
    Saldo disponible: $${valorReal}
    Ahorro disponible: $${promptAhorro}
    Total gastos: $${totalGastos}
    
    Menú de opciones:
    1 - Registrar gasto
    2 - Establecer meta de ahorro
    3 - Retirar fondos de ahorro
    Esc - Salir 
    Ingrese el número de la opción deseada:`);

    if (opcionMenu == 1) {
        let continuarMenu = true;

        while (continuarMenu) {
        let nombreGasto = prompt(`Introduce el nombre del gasto a continuación:`);
        let valorGasto = parseInt(prompt(`Introduce el valor del gasto a continuación (solo números, sin puntos, ni comas ni símbolos como $):`));

        gastos.push({nombre: nombreGasto, valor: valorGasto});
        totalGastos = gastos.reduce((acumulador, valor) => acumulador + valor.valor, 0);
        valorReal = promptMonto - (totalGastos+promptAhorro)
                console.log("Gastos registrados ascienden al valor de: $"+totalGastos);
        console.log("Ahora los ingresos disponibles son: $"+valorReal)
        continuarMenu = confirm("¿quiere añadir otro gasto?");

        };

    } else if (opcionMenu == 2) {

        let metaAhorro = parseInt(prompt('¿Qué porcentaje de tus ingresos quieres separar para ahorrar? Elige entre 0 y 100 (solo números, sin puntos, ni comas ni símbolos como $ o %)'))
        
        let ahorroCalculado = calcularAhorro (valorReal,metaAhorro);
        promptAhorro += ahorroCalculado;
        alert(`Se ha separado para ahorro el valor de $${ahorroCalculado}`);
        valorReal = promptMonto - (totalGastos+promptAhorro)
        console.log("Ingresos disponibles: $"+valorReal)
        console.log("Ahorros disponibles ascienden al valor de: $"+promptAhorro);

    } else if (opcionMenu == 3) {
        alert("¡Recuerda evitar retirar tus ahorros al menos que sea una urgencia!");
        let regresarAhorro = parseInt(prompt(
        `Tus ahorros disponibles son $${promptAhorro}.
        Introduce el valor que deseas regresar a tus ingresos disponibles (solo números, sin puntos, ni comas ni símbolos como $): `));
            promptAhorro -= regresarAhorro;
            valorReal = promptMonto - (totalGastos+promptAhorro)
            console.log("Ahora los ingresos disponibles son: $"+valorReal)
            console.log("Ahora los ahorros disponibles ascienden al valor de: $"+promptAhorro);

    } else if (opcionMenu.toLowerCase() == "esc") {
        continuar = false;
    } else {
        alert("No elegiste una opción correcta del menú, inténtalo de nuevo");
    };

}

console.log("Ingresos disponibles al cerrar la app: $"+(valorReal = promptMonto - (totalGastos+promptAhorro)));
console.log("Ahorros disponibles al cerrar la app: $"+promptAhorro);
console.log("Gastos registrados al cerrar la app: $"+totalGastos);