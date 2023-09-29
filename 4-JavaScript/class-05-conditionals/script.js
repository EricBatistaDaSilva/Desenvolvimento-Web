const userAge = 18

if (userAge > 16) {
    console.log("Pode votar");
} else {
    console.log("Não pode votar");
}

if (userAge >= 18 && userAge <= 70) {
    console.log("Voto obrigatório");
} else {
    console.log("Voto facultativo");
}

if (userAge >= 16 && userAge < 18 || userAge > 70) {
    console.log("Facultativo");
} else if (userAge >= 18 && userAge <= 70) {
    console.log("Obrigatório");
} else {
    console.log("Não pode votar");
}