// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    let newStr = "";
    for(let i = 0; i < string.length; i++) {
        string[i] === string[i].toUpperCase() 
        ? newStr += " " + string[i] 
        : newStr += string[i];
    }
    return newStr;
}

console.log(solution('camelCasing')); // camel Casing
console.log(solution('identifier')); // identifier
console.log(solution("")); // ""
console.log(solution('camelCasingTest')); // camel Casing Test