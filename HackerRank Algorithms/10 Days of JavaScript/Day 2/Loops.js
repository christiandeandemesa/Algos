/*
First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as 
it appeared in s.

Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.
*/

function vowelsAndConsonants(s) {

    /* 
    This line declares a variable, and initializes it with an empty array (e.g. []).
    An array can hold other elements, such as strings, numbers, and other arrays.
    */
    let vowels = [];
    let consonants = [];

    /*
    Uses a for loop to go through every character in s.
    string.length gets the length of a string (e.g. if s = 'string', then s.length = 6).
    */
    for(let i = 0; i < s.length; i++) {

        /* 
        s[i] is the character at index i in string s.
        Could have put the following instead: s.charAt(i).
        array.push() adds the element in the parantheses to the end of the array (e.g. If array = [1] and we array.push(2), then array = 
        [1, 2]).
        */
        if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') vowels.push(s[i]);
        else consonants.push(s[i]);
    }
    for(let j = 0; j < vowels.length; j++) {

        // Each instance of console.log() prints on a new line to the console.
        console.log(vowels[j]);
    }
    for(let k = 0; k < consonants.length; k++) {
        console.log(consonants[k]);
    }
}

vowelsAndConsonants('Hello');
/*
'e'
'o'
'H'
'l'
'l'
*/