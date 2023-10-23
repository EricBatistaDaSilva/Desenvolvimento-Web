// Table ASCII (0-9, A-Z, a-z)
const arrayNumbers = [7, 4, 5, 7, 8, 9, "7", 40];

// const arraySorted = arrayNumbers.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// });

const arraySorted = arrayNumbers.sort((a, b) => a - b);

console.log(arraySorted.join("-"));
console.log(arrayNumbers.join("-"));

const arrayNames = ["Pedinho", "eduardo", "Luíza", "Éric"];

arrayNames.sort((a, b) => a - b);
arrayNames.sort((a, b) => {
    a = a.toUpperCase();
    b = b.toUpperCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

arrayNames.sort((a, b) => a.localeCompare(b));
arrayNumbers.sort((a, b) => String(a).localeCompare(b));

console.log(arrayNames);
console.log(arrayNumbers);