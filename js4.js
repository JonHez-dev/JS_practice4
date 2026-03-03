
const num1 = 10;
const num2 = 5;


function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: División entre cero no permitida";
  }
  return a / b;
}


let resultadoSuma = sumar(num1, num2);
console.log(`The result of ${num1} + ${num2} is ${resultadoSuma}`);

let resultadoResta = restar(num1, num2);
console.log(`The result of ${num1} - ${num2} is ${resultadoResta}`);

let resultadoMultiplicacion = multiplicar(num1, num2);
console.log(`The result of ${num1} * ${num2} is ${resultadoMultiplicacion}`);

let resultadoDivision = dividir(num1, num2);
console.log(`The result of ${num1} / ${num2} is ${resultadoDivision}`);


