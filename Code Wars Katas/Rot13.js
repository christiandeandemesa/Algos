/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special 
characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet 
should be shifted, like in the original Rot13 "implementation".
*/

// Refer to the README.md for explanation on functions.
function rot13(message) {

    // Created a const to hold every uppercase and lowercase letter in the alphabet in order, and a repeat of the first thirteen letters. 
    const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';

    /*
    /[a-z]/gi is a use of Regex. [a-z] is a character set representing a range from letter a to letter z, g indicating a global search, 
    and i indicating a case insensitive search.
    */
    return message.replace(/[a-z]/gi, letter => alphabet[alphabet.indexOf(letter) + 13]);
}

console.log(rot13('grfg'));
// test

console.log(rot13('Grfg'));
// Test

console.log(rot13('V nz 25 lrnef byq.'))
// I am 25 years old.