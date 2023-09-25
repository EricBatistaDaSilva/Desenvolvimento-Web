function convertMsToKmh(speed) {
    return speed * 3.6;
}

const numberSpeed = Number(prompt("Digite a velocidade em metros: "));

document.write(`${numberSpeed}m/s é ${convertMsToKmh(numberSpeed)}km/h`);