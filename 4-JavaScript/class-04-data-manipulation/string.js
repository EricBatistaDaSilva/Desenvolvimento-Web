let myName = "Eric"

console.log(myName.__proto__);
console.log(myName.length);
console.log(myName[1]);
console.log(myName.toLocaleUpperCase());
console.log(myName.toLocaleLowerCase());

console.log(myName[1] = "R"); // string immutable
console.log(myName);

let phrase = "   Im a web developer web web   "

console.log(phrase.split(" ")[0] = "WEB");
console.log(typeof phrase);

console.log(phrase.split("").reverse().join(""));

console.log(phrase.replace("web", "WEB"));
console.log(phrase.replaceAll("web", "WEB"));
console.log(phrase);

console.log(phrase.indexOf(""));
console.log(phrase);
console.log(phrase.trim());

phrase = phrase.trim();
console.log(phrase.substring(5));

console.log(phrase.includes("web"));
console.log("web" == "Web"); // case-sensitive
console.log(phrase.toLocaleLowerCase().includes("web") ? "Teste Verdadeiro" : "Teste Falso");

const consoles = {
    log: () => {
        return "imprimir";
    },
    error: () => {
        return "imprimir error";
    },
}

consoles.log();
consoles.error();
console.log();