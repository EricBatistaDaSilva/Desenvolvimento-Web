const randomNumber = Math.ceil(Math.random() * 10);
let countTry = 1;

while (true) {
    const guessNumberUser = prompt("Adivinhe um número de 1 a 10");
        console.log(guessNumberUser);

        if (guessNumberUser === null) {
            alert(`Programa encerrado!`);
            break;
        }

        if (guessNumberUser === "" || isNaN(guessNumberUser)) {
            alert(`Insira um número de 1 a 10!`);
            continue;
        }

        if (guessNumberUser < 1 || guessNumberUser > 10) {
            alert("Atenção, número de 1 a 10!");
        }

        const gameOver = Number(guessNumberUser) === randomNumber;
        if (gameOver) {
            alert(`Parabéns você acertou o número ${randomNumber} em ${countTry} tentativa(s)!`);
            break;
        }

    countTry++
}



