// Variables iniciales 
let valorReal = 0;
let valorAhorro = 0;
let elegirMenu;
let gastos = [];
let totalGastos = 0;
let valorAhorrado = 0;
let nombreUsuario;
let continuar = true;

    // Calcular ahorro con %
const calcularAhorro = (ingresos, porcentaje) => (porcentaje / 100) * ingresos;

    // Constructora de gastos
class registrarGasto {
    constructor(concepto, monto) {
        this.concepto = concepto,
        this.monto = monto
    }
}

// Menú de opciones
const disparadorMenu = () => {
    while (continuar) {
        let opcionMenu = prompt(`SimpleBudget (alpha 0.02)
        Saldo disponible: $${valorReal}
        Ahorro disponible: $${valorAhorro}
        Total gastos: $${totalGastos}
        
        Menú de opciones:
        1 - Registrar gasto
        2 - Registrar ingreso
        3 - Establecer meta de ahorro
        4 - Retirar fondos de ahorro
        5 - Guardar datos
        6 - Borrar datos
        Esc - Salir y guardar
        Ingrese el número de la opción deseada:`);
    
        // Añadir Gasto
        if (opcionMenu == 1) {
            let continuarMenu = true;

            while (continuarMenu) {
                let nombreGasto = prompt(`Introduce el nombre del gasto a continuación:`).toLocaleLowerCase();
                let valorGasto = parseInt(prompt(`Introduce el valor del gasto a continuación (solo números, sin puntos, ni comas ni símbolos como $):`));
    
                // Llamar la función constructora para almacenar un nuevo gasto en nuestro array de objeto de gastos
                const promptGasto = () => {
                    gastos.push(new registrarGasto(nombreGasto, valorGasto));
                }
    
                promptGasto();
    
                // Calcular el total de los gastos registrados en el array de objetos de gastos
                totalGastos = gastos.reduce((acumulador, monto) => acumulador + monto.monto, 0);
                valorReal -= valorGasto;
    
                console.log("Gastos registrados ascienden al valor de: $" + totalGastos);
                console.log("Ahora los ingresos disponibles son: $" + valorReal)
                continuarMenu = confirm("¿quiere añadir otro gasto?");
    
            };
            console.log(gastos);
    
            // Sumar nuevos ingresos
        } else if (opcionMenu == 2) {
    
            valorReal += parseInt(prompt(`¿Cuál es el monto que sumarás a tus ingresos disponibles? (solo números, sin puntos, ni comas ni símbolos como $):`));
            alert(`Tu nuevo saldo disponible asciende a: $${valorReal}.`);
            console.log("Nuevos ingresos disponibles: $" + valorReal);
    
            // Definir ahorro        
        } else if (opcionMenu == 3) {
    
            let metaAhorro = parseInt(prompt(`Tu saldo disponible es de: $${valorReal} ¿Qué porcentaje de tus tu saldo disponible quieres separar para ahorrar? Elige entre 0 y 100 (solo números, sin puntos, ni comas ni símbolos como $ o %)`))
            let ahorroCalculado = calcularAhorro(valorReal, metaAhorro);
            valorAhorro += ahorroCalculado;
            alert(`Se ha separado para ahorro el valor de $${ahorroCalculado}`);
            valorReal -= ahorroCalculado;
            console.log("Ingresos disponibles: $" + valorReal)
            console.log("Ahorros disponibles ascienden al valor de: $" + valorAhorro);
    
            // Retirar ahorro 
        } else if (opcionMenu == 4) {
            alert("¡Recuerda evitar retirar tus ahorros al menos que sea una urgencia!");
            let regresarAhorro = parseInt(prompt(
                `Tus ahorros disponibles son $${valorAhorro}.
            Introduce el valor que deseas regresar a tus ingresos disponibles (solo números, sin puntos, ni comas ni símbolos como $): `));
            valorAhorro -= regresarAhorro;
            valorReal += regresarAhorro;
            console.log("Ahora los ingresos disponibles son: $" + valorReal)
            console.log("Ahora los ahorros disponibles ascienden al valor de: $" + valorAhorro);
    
        } else if (opcionMenu == 5) {
            // Almacenar cifras en el explorador
            localStorage.setItem("valorReal", valorReal)
            localStorage.setItem("valorAhorro", valorAhorro)
            localStorage.setItem("nombreUsuario", nombreUsuario)
            localStorage.setItem("gastos", JSON.stringify(gastos));
            alert("¡Tus datos han sido guardados!")

        } else if (opcionMenu == 6) {

            if (confirm("¿Quieres borrar los datos guardados de tu sesión? Si aceptas, deberás reiniciar la captura de datos la próxima vez que inicies sesión:") == true) {
                localStorage.clear();
                let reiniciarSesion = true;
                while (reiniciarSesion) {
                    let reiniciarSesionMenu = parseInt(prompt(`¡Hemos eliminado los datos de tu sesión actual! ¿Qué deseas hacer?

                        1 - Reiniciar la sesión
                        2 - Salir de la app

                        Ingrese el número de la opción deseada:`));

                    if (reiniciarSesionMenu == 1) {
                            validarSesion (); 
    
                    } if (reiniciarSesionMenu == 2) {
                        alert("¡Gracias por usar SimpleBudget!")
                        reiniciarSesion = false;
                        continuar = false;
                    } else {
                        alert("No elegiste una opción correcta del menú, inténtalo de nuevo");
                    }
    
                }
            }
            
    
        } else if (opcionMenu.toLowerCase() == "esc") {
    
            continuar = false;
    
        } else {
            alert("No elegiste una opción correcta del menú, inténtalo de nuevo");
        };
    
    }
}

// Valida si ya existe una sesión (Local Storage)
const validarSesion = () => {
    
    // Si la sesión es nueva
    if (localStorage.getItem("valorReal") == null) {
        console.log("No existe una sesión anterior, se inicia nueva sesión");
        alert("¡Has ingresado a SimpleBudget (alpha 0.02)! Vamos a acompañarte a llevar tu presupuesto. ¡Presione OK para continuar!");

        // Introducir saldo y datos iniciales
        nombreUsuario = prompt("Antes de iniciar, ¿cómo te llamas?")
        valorReal = parseInt(prompt(`Bienvenido ${nombreUsuario}, para empezar introduce el valor neto de sus ingresos mensuales (solo números, sin puntos, ni comas ni símbolos como $):`));
        console.log("Ingresos disponibles: $" + valorReal)
        continuar = true;
        disparadorMenu ();

        // Si la sesión es antigua
    } else {
        // traer datos del localStorage
        valorReal = localStorage.getItem("valorReal");
        valorAhorro = localStorage.getItem("valorAhorro");
        gastos = JSON.parse(localStorage.getItem("gastos"));
        totalGastos = gastos.reduce((acumulador, monto) => acumulador + monto.monto, 0);
        nombreUsuario = localStorage.getItem("nombreUsuario");
        
console.log(`Sesión encontrada a nombre del usuario ${nombreUsuario}`);
console.log("Ingresos disponibles al cerrar la app: $" + valorReal);
console.log("Ahorros disponibles al cerrar la app: $" + valorAhorro);
console.log("Gastos registrados al cerrar la app: $" + totalGastos);

        alert(`Hola de nuevo ${nombreUsuario}, hemos cargado tus datos de la sesión anterior, ya puedes continuar.`)
        disparadorMenu ();
    }

}

validarSesion();

// Reporte al cerrar la App
console.log("Ingresos disponibles al cerrar la app: $" + valorReal);
console.log("Ahorros disponibles al cerrar la app: $" + valorAhorro);
console.log("Gastos registrados al cerrar la app: $" + totalGastos);