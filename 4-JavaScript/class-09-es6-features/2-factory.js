// Factory (Creational Design Pattern)

function person(name, age) {
    return {
        name,
        age: age,
        canDrive: age >= 18,
        status: () => {
            if (age >= 18) {
                return "Pode dirigir";
            } else {
                return "Não pode dirigir";
            }
        },
    };
}

console.log(person("Eric", 19));
console.log(typeof person("Eric", 19));
console.log(person("Pedrinho", 18));
console.log(person("Odilon", 17));
console.log(person("Neemias", 17));
console.log(person("Neemias", 17).status());