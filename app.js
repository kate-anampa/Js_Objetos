

const n1 = parseFloat(prompt("Ingrese el primer número:"));
const n2 = parseFloat(prompt("Ingrese el segundo número:"));

const oper = prompt("Ingrese la operación a realizar (+, -, *, /, %):");

let resultado;

if (oper === "+") {
    resultado = n1 + n2;
} else if (oper === "-") {
    resultado = n1 - n2;
} else if (oper === "*") {
    resultado = n1 * n2;
} else if (oper === "/") {
    if (n2 !== 0) {
        resultado = n1 / n2;
    }
} else if (oper === "%") {
    resultado = n1 % n2;
} else {
    alert("Ingrese solo estas opciones: (+, -, *, /, %).");
}

alert(`El resultado de ${n1} ${oper} ${n2} es: ${resultado}`);
