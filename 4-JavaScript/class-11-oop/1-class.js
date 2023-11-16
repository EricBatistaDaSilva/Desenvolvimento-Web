// paradigma
// métodos (funções)
// atributos (variaveis)
// entidades do mundo real.
// This (Scope)

class Brush {
    constructor(color, height) {
        this.colorName = color;
        this.height = height
    }

    action() {
        console.log("Escreve");
    }
}

const blueBrush = new Brush("Azul", 10);
const redBrush = new Brush("Vermelho", 12);

console.log(blueBrush.colorName);
console.log(redBrush.colorName);

console.log(blueBrush.height);
console.log(redBrush.height);

redBrush.action();