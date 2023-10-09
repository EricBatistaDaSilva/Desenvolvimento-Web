function sequenceFibonacci(amount) {
    if (amount <= 0) return null;
    if (amount === 1) return 0;

    const arraySequence = [0, 1];

    for(let i = 2; i <= amount; i++) {
        arraySequence[i] = arraySequence[i - 1] + arraySequence[i - 2]; 
    }
    return arraySequence;
}

const amount =  15;

document.write(sequenceFibonacci(amount));