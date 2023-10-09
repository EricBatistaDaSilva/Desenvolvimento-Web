function calculateFactor(number) {
    let aux = 1;
    for(let i = number; i > 0; i--) {
        aux *= i;
    }
    return aux;
}

const number = 5;

console.log(calculateFactor(number));