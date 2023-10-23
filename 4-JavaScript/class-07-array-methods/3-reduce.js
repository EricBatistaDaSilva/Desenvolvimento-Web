const arrayNumbers = [2, 4, 5, 8, 9, 3];

const sumArrayNumbers = arrayNumbers.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, 100);

console.log(sumArrayNumbers);

const shoppingCart = [
    {product: "Arroz", amount: 2, price: 20},
    {product: "Feijão", amount: 4, price: 60},
    {product: "Café", amount: 3, price: 40},
];

const sumShoppingCart = shoppingCart.reduce((privValue, currentValue) => {
    return privValue + currentValue.price * currentValue.amount
}, 0);

console.log(sumShoppingCart);