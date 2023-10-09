for(let count = 0; count < 10; count++) {
    if (count > 2 && count < 8) {
        // continue;
        break;
    }
    console.log(count);
}

const myArray = ["A", 2, {}, () => {}];
const arrayBiD = [
    ["A", "B", "C"], 
    [1, 2, 3],
];

console.log(arrayBiD[0][0]);

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// for(let i = 0; i < arrayBiD.length; i++) {
//     for(let j = 0; j < arrayBiD[i].length; j++) {
//         console.log(arrayBiD[i][j]);
//     }
// }

for (const i of myArray) {
    console.log(i);
}

//of == "ov" != "off"
for (const i of arrayBiD) {
    for (const j of i) {
        console.log(j);
    }
}

for (const i in myArray) {
    // console.log(i);
    console.log(myArray[i]);
}