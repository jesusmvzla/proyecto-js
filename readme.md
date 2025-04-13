Documentación del Proyecto: Simple Budget

Simple Budget es una aplicación web diseñada para ayudar a los usuarios a gestionar sus finanzas personales de manera sencilla. Permite registrar ingresos, gastos, ahorros y realizar un seguimiento de estos datos. La aplicación utiliza el almacenamiento local del navegador para guardar la información de la sesión, lo que permite al usuario retomar su gestión financiera donde la dejó.

Características principales

Registro de ingresos y gastos: Permite registrar ingresos adicionales y gastos con un concepto descriptivo.

Gestión de ahorros: Ofrece la posibilidad de separar un porcentaje de los ingresos disponibles como ahorro.

Retiro de ahorros: Permite retirar fondos de ahorro en caso de necesidad.

Almacenamiento local: Guarda los datos de la sesión en el navegador para su posterior recuperación.

Interfaz intuitiva: Diseño sencillo y fácil de usar con mensajes claros y alertas visuales.

Funcionamiento detallado

Inicio de la aplicación

Pantalla de bienvenida: Al cargar la aplicación, se muestra un mensaje de bienvenida y se verifica la conexión a internet para validar la versión y licencia.

Validación de sesión:

Si no hay una sesión previa, se solicita al usuario que ingrese su nombre y el monto inicial de ingresos.

Si existe una sesión guardada, se recuperan los datos del almacenamiento local (ingresos disponibles, ahorros, gastos registrados, etc.).

Menú principal

El menú principal ofrece las siguientes opciones:

Nuevo gasto: Permite registrar un gasto con un concepto y monto específico.

Ver gastos: Muestra una tabla con todos los gastos registrados.

Nuevo ingreso: Permite agregar ingresos adicionales al monto disponible.

Ahorrar ingresos: Permite separar un porcentaje de los ingresos disponibles como ahorro.

Retirar fondos de ahorro: Permite retirar dinero del ahorro y sumarlo a los ingresos disponibles.

Guardar datos: Guarda la sesión actual en el almacenamiento local.

Borrar datos: Elimina todos los datos guardados en el almacenamiento local.

Cerrar sesión: Permite cerrar la sesión actual con opción de guardar los cambios.


Tecnologías utilizadas

HTML5: Estructura de la aplicación.

CSS3: Estilos básicos (complementado con Bootstrap).

Bootstrap 5: Framework para diseño responsive y componentes UI.

JavaScript: Lógica de la aplicación y manipulación del DOM.

SweetAlert2: Librería para mostrar alertas y mensajes modales.

Fetch API: Para cargar datos externos (como la versión de la aplicación).

Instrucciones de uso

Primer uso:

Ingresa tu nombre y el monto inicial de ingresos.

Explora las opciones del menú para registrar gastos, ingresos o ahorros.


Sesiones posteriores:

Los datos se cargarán automáticamente si guardaste la sesión anterior.

Puedes continuar gestionando tus finanzas desde donde lo dejaste.


Guardar y cerrar sesión:

Usa la opción "Guardar datos" para almacenar cambios.

Usa "Cerrar sesión" para salir de la aplicación con o sin guardar.


Consideraciones
La aplicación no requiere backend ni base de datos externa; todos los datos se guardan localmente en el navegador.

Para garantizar la persistencia de los datos, evita borrar el caché del navegador.

La aplicación está diseñada para uso personal.

Autor
Jesús Morales
Proyecto desarrollado como parte del curso de JavaScript en Coder House.