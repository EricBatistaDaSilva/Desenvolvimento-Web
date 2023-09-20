// e = &&
const creditCard = true;
let hasCredit = false;

// ! = negação
console.log(!!creditCard);
console.log(!(!creditCard));
console.log(creditCard);

console.log(creditCard && hasCredit);

// ou = ||
const saveMoney = true;
const getLoan = true;

console.log(saveMoney || getLoan);
console.log(!saveMoney || getLoan);
