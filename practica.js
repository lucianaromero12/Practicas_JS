var nota1=prompt ("Ingrese su nota");
console.log("Nota: ", nota1);
if (nota1 >= 5) {
    document.write("¡Estoy aprobado!");
}

else if (nota1 < 5 && nota1 >= 3) {
    document.write("¡Estoy en recuperación!");
} else {
    document.write("¡Estoy reprobado!");
}