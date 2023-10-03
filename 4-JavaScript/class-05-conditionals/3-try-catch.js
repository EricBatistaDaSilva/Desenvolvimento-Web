function runApplication() {
    return "Running...";
}

try {
    document.write(runApplicaton());
} catch(error) { // hoisting
    console.error(error);
} finally {
    console.log("Sempre será executado!!!");
}

document.write("Aplication is live...");

function divideNumbers(num1, num2) {
    if (num2 == 0) throw new Error("Não é possível dividir por zero!");

    return num1 / num2;
}

console.log(divideNumbers(6, 0));