// paradigma
// métodos (funções)
// atributos (variaveis)
// entidades do mundo real.
// This (Scope)

// class Brush {
//     constructor(color, height) {
//         this.colorName = color;
//         this.height = height
//     }

//     action() {
//         console.log("Escreve");
//     }
// }

// const blueBrush = new Brush("Azul", 10);
// const redBrush = new Brush("Vermelho", 12);

// console.log(blueBrush.colorName);
// console.log(redBrush.colorName);

// console.log(blueBrush.height);
// console.log(redBrush.height);

// redBrush.action();

class Cavaleiro {
    constructor(name, armor) {
        this.name = name;
        this.armor = armor;
        this.health = 100;
    }

    attack() {
        console.log(`${this.name} atacou!`);
    }

    damage(effective, damage = 20) {
        if (effective) {
            this.health -= damage * 1.3;
            // console.log(`${this.name} sofreu`);
        } else {
            this.health -= damage;
        }
    }
}

const Shun = new Cavaleiro("Shun", "Andromeda")
const Shiryu = new Cavaleiro("Shiryu", "Dragão")
const Seiya = new Cavaleiro("Seiya", "Pegasus")
const Hyoga = new Cavaleiro("Hyoga", "Cisne")
const Ikki = new Cavaleiro("Ikki", "Fenix")

console.log(Shun.name);
console.log(Shun.armor);
console.log(Ikki.armor);
console.log(Ikki.health);

Ikki.attack();

console.log(Hyoga.name);
console.log(Hyoga.health);

Hyoga.damage();
console.log(Hyoga.health);

Hyoga.damage();
console.log(Hyoga.health);

const effective = true
Hyoga.damage(effective);
console.log(Hyoga.health);