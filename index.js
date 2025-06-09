//1.-
alert("Hola Mundo")
//2.-
document.write("Hola Mundo")
//3.-
console.log(3+5);
//4.-
var nombre=prompt ("Ingrese su nombre", "")
document.write("Hola " + nombre)
//5.-
let num1 = prompt("Ingresa el primer número:");
let num2 = prompt("Ingresa el segundo número:");
console.log("La suma es: " + (num1 + num2));
//6.-
let num3 = prompt("Ingresa el primer número:");
let num4 = prompt("Ingresa el segundo número:");
if (num3 > num4) {
  console.log("El mayor es: " + num3);
} else if (num4 > num3) {
  console.log("El mayor es: " + num4);
} else {
  console.log("Los números son iguales.");
}
//7.-
let num5 = prompt("Ingresa el primer número:");
let num6 = prompt("Ingresa el segundo número:");
let num7= prompt("Ingresa el tercer número:");
let mayor = num5;
if (num6 > mayor) {
  mayor = num6;
}
if (num7 > mayor) {
  mayor = num7;
}
console.log("El mayor es: " + mayor);
//8.-
let num8= prompt("Ingresa un número:");
if (num8 % 2 === 0) {
  console.log(num + " es divisible por 2");
} else {
  console.log(num8 + " no es divisible por 2");
}
//9.-
let num = prompt("Ingresa un número:");

if (num % 2 === 0) {
  console.log(num + " es par");
} else {
  console.log(num + " es impar");
}
//10.-
let nota = parseFloat(prompt("Ingresa la nota numérica (0-10):"));

if (nota >= 5) {
  console.log("El alumno ha aprobado.");
} else {
  console.log("El alumno ha reprobado.");
}
//11.-
let numMes = parseInt(prompt("Ingresa un número del 1 al 12:"));
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

if (numMes >= 1 && numMes <= 12) {
  console.log("El mes correspondiente es: " + meses[numMes - 1]);
} else {
  console.log("Número de mes inválido.");
}
//12.-
let numDia = parseInt(prompt("Ingresa un número del 1 al 7:"));
const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

if (numDia >= 1 && numDia <= 7) {
  console.log("El día correspondiente es: " + dias[numDia - 1]);
} else {
  console.log("Número de día inválido.");
}