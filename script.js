
// Variables iniciales 
let valorReal = 0;
let valorAhorro = 0;
let elegirMenu;
let gastos = [];
let totalGastos = 0;
let nombreUsuario;
let continuar = true;

// Variables menú DOM
let botonInicio = document.querySelector("#iniciar");
let textoPrincipal = document.querySelector("#textoPrincipal");
let menuDiv = document.querySelector("#menuOpciones");
let boton1 = document.querySelector("#boton1");
let cancelar1 = document.querySelector("#cancelar1");
let boton2 = document.querySelector("#boton2");
let cancelar2 = document.querySelector("#cancelar2");
let boton3 = document.querySelector("#boton3");
let cancelar3 = document.querySelector("#cancelar3");
let boton4 = document.querySelector("#boton4");
let cancelar4 = document.querySelector("#cancelar4");
let boton5 = document.querySelector("#boton5");
let cancelar5 = document.querySelector("#cancelar5");
let boton6 = document.querySelector("#boton6");
let botonVerGasto = document.querySelector("#verGastos");
let botonCerrarSesion = document.querySelector("#boton7");


// Simulación tiempo de espera conexiónal servidor de licencias y versión

const esperarConexion = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const obtenerVersion = async () => {

    const errorCatchDom = "Parece que no estás conectado a internet, no pudimos validar tu licencia..."

    try {
        await esperarConexion(4000);

        await fetch('./ver.json')
            .then(response => response.json())
            .then(data => {
                const info = data["versionAppJson"][0];
                let mensajeVer = `Versión: ${info.ver} - ${info.name} | Número de licencia: ${info.licencia}`;
                document.querySelector("#version").textContent = mensajeVer;
                document.querySelector("#textoPrincipal").textContent = "¡Bienvenid@!"
                botonInicio.classList.toggle("oculto");
            })
    } catch (error) {
        console.error("No pudimos validar la versión de la aplicación:", error);
        document.querySelector("#version").textContent = errorCatchDom;
    }
}

obtenerVersion();

// Calcular ahorro con %
const calcularAhorro = (ingresos, porcentaje) => (porcentaje / 100) * ingresos;

// Constructora de gastos
class registrarGasto {
    constructor(concepto, monto) {
        this.concepto = concepto,
            this.monto = monto
    }
}

// Constructora tabla de  gastos
const TablaGastos = (data) => {
    let tablaDom = document.querySelector("#tablaGastos");
    tablaDom.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let fila =
            `<tr>
        <td>${data[i].concepto}</td>
        <td>${data[i].monto}</td>    
        </tr>`
        tablaDom.innerHTML += fila;
    }
}

// Menú de opciones
// Opción 1 - registrar gasto
let nuevoGastoDiv = document.querySelector("#nuevoGasto");
let botonRegistrarGasto = document.querySelector("#registrarGasto");

// Botón para aparecer inputs de registro de gasto
boton1.addEventListener("click", () => {
    nuevoGastoDiv.classList.toggle("oculto");
    botonVerGasto.classList.toggle("oculto");
    boton2.classList.toggle("oculto");
    boton3.classList.toggle("oculto");
    boton4.classList.toggle("oculto");
    boton5.classList.toggle("oculto");
    boton6.classList.toggle("oculto");
    botonCerrarSesion.classList.toggle("oculto");
})

// Botón para cancelar
cancelar1.addEventListener("click", () => {
    nuevoGastoDiv.classList.toggle("oculto")
    botonVerGasto.classList.toggle("oculto");
    boton2.classList.toggle("oculto");
    boton3.classList.toggle("oculto");
    boton4.classList.toggle("oculto");
    boton5.classList.toggle("oculto");
    boton6.classList.toggle("oculto");
    botonCerrarSesion.classList.toggle("oculto");

})

// Botón para registrar el nuevo gasto
botonRegistrarGasto.addEventListener("click", () => {
    let nombreGastoInput = document.querySelector("#nombreGasto");
    let valorGastoInput = document.querySelector("#montoGasto");

    let nombreGasto = document.querySelector("#nombreGasto").value;
    let valorGasto = parseInt(document.querySelector("#montoGasto").value);

    console.log(nombreGasto);
    console.log(valorGasto);

    const promptGasto = () => { gastos.push(new registrarGasto(nombreGasto, valorGasto)); }
    promptGasto();

    totalGastos = gastos.reduce((acumulador, monto) => acumulador + monto.monto, 0);
    valorReal -= valorGasto;

    nombreGastoInput.value = "";
    valorGastoInput.value = "";

    textoPrincipal.innerHTML = `<p>¡Hola, <b>${nombreUsuario}</b>! <br> Ingresos disponibles: <b>$${valorReal}</b> <br> Gastos registrados: <b>$${totalGastos}</b> <br> Ahorro disponible: <b>$${valorAhorro}</b> </p>`;

    console.table(gastos);
    console.log("Gastos registrados ascienden al valor de: $" + totalGastos);
    console.log("Ahora los ingresos disponibles son: $" + valorReal)
})

// Boton ver tabla de gastos
let verGastosDiv = document.querySelector("#verGastosDiv")

botonVerGasto.addEventListener("click", () => {

    if (gastos == 0) {
        Swal.fire(`No se encuentra ningún gasto registrado`);
    } else {
        verGastosDiv.classList.toggle("oculto");
        TablaGastos(gastos);
        boton1.classList.toggle("oculto");
        boton2.classList.toggle("oculto");
        boton3.classList.toggle("oculto");
        boton4.classList.toggle("oculto");
        boton5.classList.toggle("oculto");
        boton6.classList.toggle("oculto");
        botonCerrarSesion.classList.toggle("oculto");
    }
})

// Boton volver
cancelar5.addEventListener("click", () => {
    verGastosDiv.classList.toggle("oculto");
    boton1.classList.toggle("oculto");
    boton2.classList.toggle("oculto");
    boton3.classList.toggle("oculto");
    boton4.classList.toggle("oculto");
    boton5.classList.toggle("oculto");
    boton6.classList.toggle("oculto");
    botonCerrarSesion.classList.toggle("oculto");
})



// Opción 2 nuevo ingreso
let nuevoIngresoDiv = document.querySelector("#nuevoIngreso");
let botonRegistrarIngreso = document.querySelector("#registrarIngreso");

// Botón para aparecer inputs de registro de ingreso
boton2.addEventListener("click", () => {
    nuevoIngresoDiv.classList.toggle("oculto");
    boton1.classList.toggle("oculto");
    botonVerGasto.classList.toggle("oculto");
    boton3.classList.toggle("oculto");
    boton4.classList.toggle("oculto");
    boton5.classList.toggle("oculto");
    boton6.classList.toggle("oculto");
    botonCerrarSesion.classList.toggle("oculto");
})

// Botón para cancelar
cancelar2.addEventListener("click", () => {
    nuevoIngresoDiv.classList.toggle("oculto")
    boton1.classList.toggle("oculto");
    botonVerGasto.classList.toggle("oculto");
    boton3.classList.toggle("oculto");
    boton4.classList.toggle("oculto");
    boton5.classList.toggle("oculto");
    boton6.classList.toggle("oculto");
    botonCerrarSesion.classList.toggle("oculto");
})

// Botón y lógica para registrar valores de ingreso
botonRegistrarIngreso.addEventListener("click", () => {
    let valorIngresoInput = document.querySelector("#montoIngreso");
    let valorIngreso = parseInt(document.querySelector("#montoIngreso").value);

    console.log(valorIngreso);

    valorReal += valorIngreso
    console.log("Nuevos ingresos disponibles: $" + valorReal);
    valorIngresoInput.value = "";
    textoPrincipal.innerHTML = `<p>¡Hola, <b>${nombreUsuario}</b>! <br> Ingresos disponibles: <b>$${valorReal}</b> <br> Gastos registrados: <b>$${totalGastos}</b> <br> Ahorro disponible: <b>$${valorAhorro}</b> </p>`;
})

// Opción 3 - Establecer meta de ahorro
let nuevoAhorroDiv = document.querySelector("#nuevoAhorro");
let botonRegistrarAhorro = document.querySelector("#registrarAhorro");
let textoAhorro = document.querySelector("#textoAhorro");

// Botón para aparecer inputs de registro de ahorro
boton3.addEventListener("click", () => {
    nuevoAhorroDiv.classList.toggle("oculto");
    textoAhorro.innerHTML = `Tu saldo disponible es de: <b>$${valorReal}</b> ¿Qué porcentaje de tus tu saldo disponible quieres separar para ahorrar? Elige entre 0 y 100 (solo números, sin puntos, ni comas ni símbolos como $ o %)`;
    boton1.classList.toggle("oculto");
    botonVerGasto.classList.toggle("oculto");
    boton2.classList.toggle("oculto");
    boton4.classList.toggle("oculto");
    boton5.classList.toggle("oculto");
    boton6.classList.toggle("oculto");
    botonCerrarSesion.classList.toggle("oculto");
})

// Botón para cancelar
cancelar3.addEventListener("click", () => {
    nuevoAhorroDiv.classList.toggle("oculto")
    boton1.classList.toggle("oculto");
    botonVerGasto.classList.toggle("oculto");
    boton2.classList.toggle("oculto");
    boton4.classList.toggle("oculto");
    boton5.classList.toggle("oculto");
    boton6.classList.toggle("oculto");
    botonCerrarSesion.classList.toggle("oculto");
})

// Botón y lógica para registrar valores de ahorro

botonRegistrarAhorro.addEventListener("click", () => {
    let porcentajeAhorroInput = document.querySelector("#porcentajeAhorro");
    let porcentajeAhorroValor = parseInt(document.querySelector("#porcentajeAhorro").value);

    let ahorroCalculado = parseInt(calcularAhorro(valorReal, porcentajeAhorroValor));
    valorReal -= ahorroCalculado;
    valorAhorro += ahorroCalculado;
    textoAhorro.innerHTML = `Tu saldo disponible es de: <b>$${valorReal}</b> ¿Qué porcentaje de tus tu saldo disponible quieres separar para ahorrar? Elige entre 0 y 100 (solo números, sin puntos, ni comas ni símbolos como $ o %)`;
    porcentajeAhorroInput.value = "";

    console.log(porcentajeAhorroValor)
    console.log(ahorroCalculado)
    console.log(valorAhorro)
    textoPrincipal.innerHTML = `<p>¡Hola, <b>${nombreUsuario}</b>! <br> Ingresos disponibles: <b>$${valorReal}</b> <br> Gastos registrados: <b>$${totalGastos}</b> <br> Ahorro disponible: <b>$${valorAhorro}</b> </p>`;
})

// Opción 4 - retirar monto desde ahorros
let retirarAhorroDiv = document.querySelector("#retirarAhorro");
let botonRetirarAhorro = document.querySelector("#registrarRetiroAhorro");
let textoRetirarAhorro = document.querySelector("#textoRetirarAhorro");

// Botón para aparecer inputs de retiro de ahorro
boton4.addEventListener("click", () => {
    retirarAhorroDiv.classList.toggle("oculto");
    textoRetirarAhorro.innerHTML = `<b>¡Recuerda evitar retirar tus ahorros al menos que sea una urgencia!</b> <br> Tus ahorros disponibles son <b>$${valorAhorro}</b>.
<br>Introduce el valor que deseas regresar a tus ingresos disponibles (solo números, sin puntos, ni comas ni símbolos como $):`
    boton1.classList.toggle("oculto");
    botonVerGasto.classList.toggle("oculto");
    boton2.classList.toggle("oculto");
    boton3.classList.toggle("oculto");
    boton5.classList.toggle("oculto");
    boton6.classList.toggle("oculto");
    botonCerrarSesion.classList.toggle("oculto");
})

// Botón para cancelar
cancelar4.addEventListener("click", () => {
    retirarAhorroDiv.classList.toggle("oculto")
    boton1.classList.toggle("oculto");
    botonVerGasto.classList.toggle("oculto");
    boton2.classList.toggle("oculto");
    boton3.classList.toggle("oculto");
    boton5.classList.toggle("oculto");
    boton6.classList.toggle("oculto");
    botonCerrarSesion.classList.toggle("oculto");
})

// Botón y lógica para registrar retiro de ahorro
botonRetirarAhorro.addEventListener("click", () => {
    let retirarAhorroInput = document.querySelector("#montoRetiroAhorro");
    let retirarAhorroMonto = parseInt(document.querySelector("#montoRetiroAhorro").value);

    valorAhorro -= retirarAhorroMonto;
    valorReal += retirarAhorroMonto;

    textoRetirarAhorro.innerHTML = `<b>¡Recuerda evitar retirar tus ahorros al menos que sea una urgencia!</b> <br> Tus ahorros disponibles son <b>$${valorAhorro}</b>.
<br>Introduce el valor que deseas regresar a tus ingresos disponibles (solo números, sin puntos, ni comas ni símbolos como $):`;
    retirarAhorroInput = "";

    console.log(valorAhorro);
    console.log(valorReal);
    textoPrincipal.innerHTML = `<p>¡Hola, <b>${nombreUsuario}</b>! <br> Ingresos disponibles: <b>$${valorReal}</b> <br> Gastos registrados: <b>$${totalGastos}</b> <br> Ahorro disponible: <b>$${valorAhorro}</b> </p>`;
})

// Opción 5 - para guardar datos

let botonGuardar = document.querySelector("#boton5");

botonGuardar.addEventListener("click", () => {

    Swal.fire({
        title: "¿Quieres guardar tu sesión?",
        showCancelButton: true,
        confirmButtonText: "Sí, guardar",
        cancelButtonText: "Cancelar",
        icon: "question"
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem("valorReal", valorReal)
            localStorage.setItem("valorAhorro", valorAhorro)
            localStorage.setItem("nombreUsuario", nombreUsuario)
            localStorage.setItem("gastos", JSON.stringify(gastos));
            Swal.fire("¡Sesión guardada!", "", "success");
        }
    });

})

// Opción 6 - para borrar datos

let botonBorrar = document.querySelector("#boton6");

botonBorrar.addEventListener("click", () => {

    Swal.fire({
        title: "¿Quieres borrar los datos de tu sesión?",
        inputLabel: "No podras recuperar tu información",
        showCancelButton: true,
        confirmButtonText: "Sí, borrar",
        cancelButtonText: "Cancelar",
        icon: "warning"
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            Swal.fire("¡Sesión borrada!", "", "success");
            menuDiv.classList.toggle("oculto");
            botonInicio.classList.toggle("oculto");
            textoPrincipal.textContent = "";

        }
    });
})

// Boton 7 - cerrar sesión
botonCerrarSesion.addEventListener("click", () => {
    Swal.fire({
        title: "¿Quieres abandonar esta sesión?",
        text: "Perderás el progreso no guardado",
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonText: "Guardar y salir",
        denyButtonText: "Salir sin guardar",
        cancelButtonText: "Volver",
        icon: "info"
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem("valorReal", valorReal)
            localStorage.setItem("valorAhorro", valorAhorro)
            localStorage.setItem("nombreUsuario", nombreUsuario)
            localStorage.setItem("gastos", JSON.stringify(gastos));
            Swal.fire("¡Sesión guardada!", "", "success");
            menuDiv.classList.toggle("oculto");
            botonInicio.classList.toggle("oculto");
            textoPrincipal.innerHTML = "";
        } else if (result.isDenied) {
            Swal.fire("Sesión terminada");
            menuDiv.classList.toggle("oculto");
            botonInicio.classList.toggle("oculto");
            textoPrincipal.innerHTML = "";
        }
    });
})

// Valida si ya existe una sesión (Local Storage)
const validarSesion = () => {

    // Si la sesión es nueva, registrar nuevo usuario
    if (localStorage.getItem("valorReal") == null) {
        console.log("No existe una sesión anterior, se inicia nueva sesión");
        let nuevaSesionDiv = document.querySelector("#nuevaSesion");
        nuevaSesionDiv.classList.toggle("oculto");

        let botonRegistroUsuario = document.querySelector("#registrarUsuario");

        botonRegistroUsuario.addEventListener("click", () => {
            let nombreUsuarioInput = document.querySelector("#nombreUsuario");
            let nombreUsuarioValor = document.querySelector("#nombreUsuario").value;
            nombreUsuarioInput.value = "";

            let ingresosInicialesInput = document.querySelector("#montoDisponible");
            let ingresosIniciales = parseInt(document.querySelector("#montoDisponible").value);
            ingresosInicialesInput.value = "";

            if (!nombreUsuarioValor || !ingresosIniciales) {
                Swal.fire("¡Debes incluir tu nombre y tus ingresos antes de continuar! ");
                console.log("No se llenaron los campos satisfactoriamente");
            } else {
                valorReal = ingresosIniciales;
                nombreUsuario = nombreUsuarioValor;
                console.log(`Esta sesión ahora se encuentra bajo el usuario ${nombreUsuario}`);
                console.log(`Esta sesión tiene ahora un presupuesto inicial de $${valorReal}`);
                Swal.fire(`¡Bienvenido a SimpleBudget ${nombreUsuario}!`);
                textoPrincipal.innerHTML = `<p>¡Hola, <b>${nombreUsuario}</b>! <br> Ingresos disponibles: <b>$${valorReal}</b> <br> Gastos registrados: <b>$${totalGastos}</b> <br> Ahorro disponible: <b>$${valorAhorro}</b> </p>`;
                nuevaSesionDiv.classList.toggle("oculto");
                menuDiv.classList.toggle("oculto");


            }
        })
        // Si la sesión es antigua
    } else {
        // traer datos del localStorage
        valorReal = parseInt(localStorage.getItem("valorReal"));
        valorAhorro = parseInt(localStorage.getItem("valorAhorro"));
        gastos = JSON.parse(localStorage.getItem("gastos"));
        totalGastos = gastos.reduce((acumulador, monto) => acumulador + monto.monto, 0);
        nombreUsuario = localStorage.getItem("nombreUsuario");
        menuDiv.classList.toggle("oculto");

        console.log(`Sesión encontrada a nombre del usuario ${nombreUsuario}`);
        console.log("Ingresos disponibles al cerrar la app: $" + valorReal);
        console.log("Ahorros disponibles al cerrar la app: $" + valorAhorro);
        console.log("Gastos registrados al cerrar la app: $" + totalGastos);

        textoPrincipal.innerHTML = `<p>¡Hola de nuevo, <b>${nombreUsuario}</b>! <br> Ingresos disponibles: <b>$${valorReal}</b> <br> Gastos registrados: <b>$${totalGastos}</b> <br> Ahorro disponible: <b>$${valorAhorro}</b> </p>`;
        // alert(`Hola de nuevo ${nombreUsuario}, hemos cargado tus datos de la sesión anterior, ya puedes continuar.`)
        // disparadorMenu();
    }

}

// Eventos DOM
botonInicio.classList.toggle("oculto");
botonInicio.addEventListener("click", () => {
    botonInicio.classList.add("oculto");
    validarSesion();
})

// Reporte al cerrar la App
console.log("Ingresos disponibles al cerrar la app: $" + valorReal);
console.log("Ahorros disponibles al cerrar la app: $" + valorAhorro);
console.log("Gastos registrados al cerrar la app: $" + totalGastos);