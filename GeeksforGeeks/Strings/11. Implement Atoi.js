/*
Your task is to implement the function atoi. The function takes a string (str) as argument and converts it to an integer and returns it. You are not allowed to use 
inbuilt functions.
*/

function atoi(str) {
    /*
    sign represents whether the str could be a positive or negative integer.
    base will hold the str as an integer.
    i represents the first index in str.
    */
    let sign = 1;
    let base = 0;
    let i = 0;

    // While loop will change i to be the index of the first non-whitespace character in str.
    while(str[i] === ' ') {
        i++;
    }
    
    /*
    If the character at i's index is -, then sign is -1 to represent a negative integer.
    If the character at i's index is +, then sign is 1 to represent a positive integer.
    */
    if(str[i] === '-' || str[i] === '+') {
        sign = str[i] === '-' ? -1 : 1;
        i++;
    }
    
    // While the character at i's index is 0 - 9 as a string or number...
    while(str[i] >= '0' && str[i] <= '9') {

        // base adds each character in str as an integer (str[i] - 0) to itself in the correct numbers place (base * 10).
        base = base * 10 + (str[i] - 0);

        // Removes the edge case of having a base that is bigger than what JavaScript can handle.
        if(sign === 1 && base > Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER;
        i++;
    }
    
    // If at least one character in above while loop was not 0 - 9 as a string or number, base will always be 0 so the str could not be converted.
    if(base === 0) return `Cannot convert ${str} into a number`;

    // Otherwise, return sign times base to get the converted positive or negative integer.
    else return sign * base;
}

console.log(atoi('123'));
// 123
console.log(atoi('  456  '));
// 456
console.log(atoi('+789'));
// 789
console.log(atoi('-123'));
// -123
console.log(atoi('-+456'));
// 'Cannot convert -+456 into a number'
console.log(atoi('hello 789'));
// 'Cannot convert hello 789 into a number'
console.log(atoi(true));
// 'Cannot convert true into a number'