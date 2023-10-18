const array = ["Matrix", "IT", "ET", "Jumanji", "Barbie"];

console.log(array);

const arrayForEach = array.forEach((value, index, array) => {
    array[index] = "A"
    return {value, index, array};
});

// console.log(arrayForEach);

//immutable

const arrayMap = array.map((value, index, array) => {
    return {value, index, array};
});

console.log(array);
console.log(arrayMap);

const dollar = [10, 20, 30, 40, 50]
const dollarConverted = dollar.map((value) => {
    return value * 5.05
});

console.log(dollar);
console.log(dollarConverted);