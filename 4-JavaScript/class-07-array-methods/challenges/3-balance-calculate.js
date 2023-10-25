// Crie uma lógica para calcular o somatório das Receitas e das Despesas abaixo
// Imprima os somatórios e o saldo formatado no padão brasileiro,
// Informe se a situação está positiva ou negativa e se existe dívidas.

const incomes = ["salary", "R$ 2000,00", "commission", "R$ 825,45", "bônus", "R$ 320,00"];

const expenses = [
  "rent",
  "R$ 500,00",
  "energy",
  "R$ 325,55",
  "water",
  "R$ 120,34",
  "food",
  "R$ 1300,62",
];

const incomeValues = incomes.filter((value) => value.includes("R$"));

const incomeValuesNumber = incomeValues.map((value) => {
    return Number(value.replace("R$ ", "").replace(",", "."));
});

const sumIncomes = incomeValuesNumber.reduce((a, b) => a + b);

console.log(sumIncomes.toLocaleString("pt-BR", {
    style: "currency",
    currency: "brl"
}));

const expensesValues = expenses.filter((value) => value.includes("R$"));

const expensesValuesNumber = expensesValues.map((value) => {
    return Number(value.replace("R$ ", "").replace(",", "."));
});

const sumExpenses = expensesValuesNumber.reduce((a, b) => a + b);

console.log(sumExpenses.toLocaleString("pt-BR", {
    style: "currency",
    currency: "brl"
}));

let situation;

if (sumIncomes > sumExpenses) {
    situation = "Saldo positivo!";
} else if (sumIncomes < sumExpenses) {
    situation = "Saldo negativo!";
} else if (sumIncomes === sumExpenses) {
    situation = "Sem saldo, mas sem dividas!";
}

console.log(situation);