# Lista de empleados
Solución para una lista de empleados con las caracteristicas descritas.

## Tabla de contenido.
* [Lista de empleados](#lista-de-empleados)
  * [Tabla de contenidos](#tabla-de-contenido)
  * [Información General](#lista-de-empleados)
    * [Screenshot web](#lista-de-empleados)
    * [Screenshot mobile](#lista-de-empleados)
    * [Links](#lista-de-empleados)
  * [Actividades](#actividades)
  * [Proceso](#lista-de-empleados)
    * [Tecnologías](#lista-de-empleados)
    * [Comandos](#lista-de-empleados)
  * [Referencias](#lista-de-empleados)

## Actividades

* [x] 1. Crear una tabla que muestre todas las propiedades de los empleados cumpliendo las siguientes características:
  * [x] El salario está en pesos mexicanos
  * [x] Mostrar el salario en formato de dinero, es decir 16900 se muestra
como $ 16,900.00.
  * [x] Si el salario tuviera decimales se deben mostrar limitados a 2 decimales,
es decir 16900.333 se debe mostrar como $ 16,900.33.
* [x] Adicionalmente en la tabla se debe de poder:
  * [x] Agregar empleados (Un botón al principio o final de la tabla).
  * [x] Editar empleados (Un botón al principio o final de la tabla).
  * [x] El nombre de la empresa no se debe poder modificar.
  * [x] Agregar un botón que muestre los salarios en USD, tipo de cambio de US
$1 = MXN $21.50.
* [x] Se debe conservar en un estado (desplegado en una cabecera):
  * [x] Total de empleados
  * [x] Si se están mostrando los salarios con MXN o USD
* [x] Poder filtrar empleados con un campo que permita buscar a los empleados por nombre y empresa:
  * [x] El mismo campo debe funcionar para nombre y empresa.
  * [x] Se deben actualizar los resultados conforme se vayan escribiendo.
* [ ] La tabla debe contener las siguientes características, algunas necesitarán agregar clases con CSS:
  * [x] Las filas deben de alternar el color del fondo
  * [x] Al hacer hover en una fila debe cambiar el color del fondo.
  * [x] Los montos deben ir alineados a la derecha
  * [x] Los caracteres de los montos deben estar monoespaciado
  * [x] Si el salario es menor a 10,000 mostrarlo en color rojo, si es mayor mostrarlo en color verde.
  * [ ] Los botones de texto (como agregar nuevo empleado o imprimir a consola) deben tener fondo transparente y tener texto y borde en color verde.
  * [ ] Al hacer hover deben de poner su color de fondo con el mismo color del borde y el texto pasa a ser color blanco, esto debe tener una transición.
* [ ] Agregar una columna donde se muestre una captura de una imagen para cada uno de los empleados:
  * [ ] Debe poderse elegirse un empleado y poder capturar un foto con la herramienta de RecordRTC.
  * [ ] Debe permitir compatibildad con el navegador.
  * [ ] La imagen debe guardarse de forma local y aparecer en el renglón del empleado elegido en la tabla.

## Referencias.

* [Int Number Format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
* [ECMA Script](https://tc39.es/ecma402/#sec-intl-numberformat-constructor)
* [Updating a value in a nested array of objects](https://javascript.plainenglish.io/react-updating-a-value-in-state-array-7bae7c7eaef9)