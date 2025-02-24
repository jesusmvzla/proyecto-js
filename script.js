
alert("¡Bienvenido a SimpleBudget (alpha 0.02)! Vamos a acompañarte a llevar tu presupuesto. ¡Presione OK para continuar!");

let promptMonto;
let promptAhorro;
let elegirMenu;
let gastos = [];
let totalGastos = 0;
let valorAhorrado = 0;

promptMonto = parseInt(prompt("Antes de iniciar, introduzca el valor neto de sus ingresos mensuales (solo números, sin puntos, ni comas ni símbolos como $):"));
console.log("Ingresos disponibles: "+promptMonto)
promptAhorro = 0;
console.log("Ahorro disponible: "+promptAhorro)

let continuar = true;

function calcularAhorro (ingresos, porcentaje) {
return (porcentaje/100)*ingresos

}

while (continuar) {
    let opcionMenu = prompt(`SimpleBudget (alpha 0.02)
    Saldo disponible: $${promptMonto-totalGastos}
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
        console.log(totalGastos);
        continuarMenu = confirm("¿quiere añadir otro gasto?");
        };

    } else if (opcionMenu == 2) {

        let metaAhorro = parseInt(prompt('¿Qué porcentaje de tus ingresos quieres separar para ahorrar? Elige entre 0 y 100 (solo números, sin puntos, ni comas ni símbolos como $ o %)'))
        
        let ahorroCalculado = calcularAhorro (promptMonto,metaAhorro);
        promptAhorro = ahorroCalculado
        promptMonto -= promptAhorro
        alert(`Se ha separado para ahorro el valor de $${ahorroCalculado}`)

    } else if (opcionMenu == 3) {
        alert("¡Recuerda evitar retirar tus ahorros al menos que sea una urgencia!")
        let regresarAhorro = parseInt(prompt(`Tus ahorros disponibles son $${promptAhorro}.
            'Introduce el valor que deseas regresar a tus ingresos disponibles (solo números, sin puntos, ni comas ni símbolos como $): `))
            promptAhorro -= regresarAhorro
            promptMonto += regresarAhorro

    } else if (opcionMenu.toLowerCase() == "esc") {
        continuar = false;
    } else {
        alert("No elegiste una opción correcta del menú, inténtalo de nuevo")
    };

}

console.log("Ingresos disponibles al cerrar la app: "+promptMontopromptMonto);
console.log("Ahorros disponibles al cerrar la app: "+promptAhorro);