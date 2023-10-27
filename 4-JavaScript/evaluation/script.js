// Avaliação JavaScript

// Questão 1 (Data Types):
// Declare as seguntes variáveis e atribua os valores por tipo: Sting, Number, Boolean, Function, Array, Object

let Sting = "1";
let Number = 1;
let Boolean = true;
let oneFunction = () => {};
let array = [];
let Object = {};

// Questão 2 (Operators):
// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 12 e 3 e raiz quadrada de 144;

console.log(10 + 5);
console.log(24 - 16);
console.log(5 * 20);
console.log(50 / 2);
console.log(250 % 15);
console.log(12 ** 3);
console.log(Math.sqrt(144));
console.log(144 ** (1/3));

// Questão 3 (Functions):
// Crie e execute uma função de nome 'test" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno.

function test(value) {
    return result = "JavaScript" + value
}
const value = "test"
const resultFunction = test(value)

console.log(resultFunction);

// Questão 4 (Data Manipulation):
// Usando os métodos FIFO e LIFO, crie um array com 3 valores e posteriormente insira mais um valor no final e substitua o do início por outro.

const myArray = [1, 2, 3, 4];
console.log("Array incial", myArray);

myArray.push(5);
console.log("Adição de um valor", myArray);

myArray.shift();
myArray.unshift(0);

console.log("Valor incial subsituido", myArray);

// Questão 5 (for):
// Liste todos os valores do array criado na questão anterior ultilizando o for.

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
}

// Questão 6 (while):
// Escreva os números de 0 a 500 sem os que pertencem à familía do 200 e do 300:

let count = 0;
while (count <= 500) {
    if (count < 200 || count >= 400) {
        console.log(count);
    }
    count++;
}

// Questão 7 (if):
// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h

const maxSpeed = 60;
const speed = 60;

if (speed > maxSpeed) {
    console.log("Multado por excesso de velocidade!");
} else if (speed < maxSpeed / 2) {
    console.log("Multa por baixa velocidade!");
} else {
    console.log("Dentro da velocidade");
}

// Questão 8 (array methods):
// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa

const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];

const newSalary = salary.map((salary) => (salary * 10) / 100 + salary);

const newTotal = newSalary.reduce((a, b) => a + b);

console.log(newTotal.toLocaleString("pt-br", { style: "currency", currency: "brl"}));