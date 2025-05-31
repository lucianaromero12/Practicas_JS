var nota=prompt ("Ingrese su nota");
console.log("Nota: ", nota);
if (nota >= 5) {
    document.write("¡Estoy aprobado!");
}

else if (nota < 5 && nota >= 3) {
    document.write("¡Estoy en recuperación!");
} else {
    document.write("¡Estoy reprobado!");
}