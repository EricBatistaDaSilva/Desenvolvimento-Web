let num1 = -2.4854545518;
let num2 = 91948774555547552468793154796865741698574635984265;

console.log(num1);
console.log(parseInt(num1));
console.log(parseInt(num2));
console.log(parseFloat(num2));

console.log(String(num2).length);
console.log(String(num1.toFixed(2)).replace(".", ","));
console.log(`R$ ${2.4854545518.toFixed(2).replace(".", ",")}`);

console.log(num1.toLocaleString("pt-BR", {
    style: "currency",
    currency: "usd" //brl
}));

console.log(num1);
console.log(Math.abs(num1));

const numbers = [2, 3, 4, 6, 7, 5, 8, 10, 65, 94, 98, 1]

console.log(Math.max(2, 3));
console.log(Math.max(...numbers));
console.log(Math.max(2, 3, 4, 6, 7, 5, 8, 10, 65, 94, 98, 1));

console.log(Math.min(2, 3));
console.log(Math.PI);
console.log(Math.E);

console.log(Math.round(2.5));
console.log(Math.ceil(2.00001));
console.log(Math.floor(2.999999999));
console.log(Math.round(2.4));
console.log(Math.round(0.99) * 10);
console.log(Math.round(Math.random() * 10)); // 0-10
console.log(Math.round(Math.random() * 10)); 
console.log(Math.ceil(Math.random() * 10)); // 1-3
console.log(Math.floor(Math.random() * 11)); // 1-3

console.log(Math.ceil(0));

