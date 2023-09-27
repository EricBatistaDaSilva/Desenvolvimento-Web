function checkPalindrome(text) {
    let normalText = text;
    let reverseText = text.split("").reverse().join("");
    return normalText == reverseText;
}

let text = "ano"
const isPalindrome = checkPalindrome(text);

console.log(isPalindrome ? "Verdadeiro" : "Falso");
