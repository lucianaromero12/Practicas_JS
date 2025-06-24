 //1.-
function contarA(frase1) {
  frase1 = frase1.toLowerCase();
  let contador = 0;
  for (let i = 0; i < frase1.length; i++) {
    if (frase1[i] === 'a') {
      contador++;
    }
  }
  return contador;
}

let frase1 = prompt("Ingresa una frase:");

let cantidadA = contarA(frase1);

console.log("La letra 'a' aparece " + cantidadA + " veces en la frase.");

//2.- 
function contarVocales(frase) {
  const vocales = {};
  const vocalesString = "aeiouAEIOU";

  for (let i = 0; i < frase.length; i++) {
    const vocal = frase[i].toLowerCase();
    if (vocalesString.includes(vocal)) {
      vocales[vocal] = (vocales[vocal] || 0) + 1;
    }
  }

  console.log("Conteo de vocales:", vocales);
}

let frase = prompt("Ingresa una frase:");
contarVocales(frase);

//3.-
function calculadora() {
  let num1 = parseFloat(prompt("Ingresa el primer número:"));
  let num2= parseFloat(prompt("Ingresa el segundo número:"));
  let operacion = prompt("Ingresa la operación (+, -, *, /):");

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor, ingresa números válidos.");
    return;
  }
  if (operacion !== "+" && operacion !== "-" && operacion !== "*" && operacion !== "/") {
    console.log("Por favor, ingresa una operación válida (+, -, *, /).");
    return;
  }
  if (operacion === "/" && num2 === 0) {
    console.log("No se puede dividir entre cero.");
    return;
  }


  let resultado;
  switch (operacion) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
  }

  console.log("El resultado es:", resultado);
}

calculadora();