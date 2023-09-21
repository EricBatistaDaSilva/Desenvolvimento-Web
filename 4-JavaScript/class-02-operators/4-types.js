// Binary

let num1 = 2;
let num2 = 3;

console.log(num1 + num2);
console.log("text" + num2);
console.log(2 + 3);

// Unary

console.log(num1++);
console.log(num1);
console.log(++num1);
console.log(typeof num1);

// Ternary

console.log(3 != 4 ? "verdadeiro" : "falso");

console.log(4 != 4 ? num1 = "AAA" : num1 = "BBB");
console.log(num1);

const average = 2;
console.log(average >= 7 ? "Aprovado" : "Reprovado");

// Truthy Falsy

// Truthy               Falsy
// 1, 1.5, -1           0
// " ", "0", "false"    ""
// {}                   null
// []                   undefined
// Infinity, -Infinity  NaN

console.log(Boolean ? true : false);
console.log(-1 ? "true" : "false");
console.log("" ? "true" : "false");
console.log("0" ? "true" : "false");
console.log({} ? "true" : "false");
console.log(null ? "true" : "false");
console.log(-Infinity ? "true" : "false");
