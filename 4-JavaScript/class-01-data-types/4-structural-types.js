// Object

let nameStudant = "Emanuel";
let age = 30;
let profission = "Web Developer \n Data Analyst";

console.log(age);

let pokemon = {
    name: "Blastoise",
    level: 50,
    type: "water",
    attack: () =>"pound",
    special: () =>"hydropump",
};

console.log(pokemon);
console.log(typeof pokemon);
console.log(pokemon.name);
console.log(pokemon.level);
console.log(pokemon["type"]);
console.log(pokemon.special());

// Array (Vector)

// let pokedex = ["Charmander", 6, "Bulbasour", 5, "Squirtle", 4];

// let pokedex = [
//     ["Charmander", 6], 
//     ["Bulbasour", 5], 
//     ["Squirtle", 4],
// ];

let pokedex = [
    { name: "Charmander", level: 6}, 
    { name: "Bulbasour", level: 5}, 
    { name: "Squirtle", level: 4},
];

console.log(pokedex);
console.log(typeof pokedex);
console.log(pokedex[0]);
console.log(pokedex[2]);
console.log(pokedex[1]);
console.log(pokedex[0].name);
console.log(pokedex[0].level);