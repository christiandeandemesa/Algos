/*
A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English 
alphabet. Return either pangram or not pangram as appropriate.
*/

function pangrams(s) {

    // Capitalizes every letter in the string because sets see uppercase and lowercase letters as unique (e.g. 'A' is different form 'a').
    const capS = s.toUpperCase();

    // Creates a new set which is an object that holds unique values.
    let set = new Set();

    // For loop to go through every character in the string.
    for(let i = 0; i < capS.length; i++) {

        /*
        If it is not the case (!) that set has (set.has()) the current character in the string (capS[i]) and the character is not an
        whitespace (capS[i] !== ' '), then add the character as value to the set (set.add(capS[i])).
        Note that this will not work if the character is a number, punctuation mark, or other non-letter and non-whitespace symbol.
        */
        if(!set.has(capS[i]) && capS[i] !== ' ') set.add(capS[i]);
    }

    // If the size of the set is less than 26 because there are 26 letters in the alphabet, then it is not a pangram.
    if(set.size < 26) return 'not pangram';

    // Otherwise it is a pangram.
    else return 'pangram';
}

console.log(pangrams('The quick brown fox jumps over the lazy dog'));
// 'pangram'
console.log(pangrams('AbCdEfGhIjKlMnOpQrStUvWxY'));
// 'not pangram'