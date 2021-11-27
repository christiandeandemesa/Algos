/*
Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric 
keypads.

Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button 
repeatedly to cycle through the possible values.

For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through 
P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button 
presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a 
space and two presses producing a zero.

In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this 
exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept 
input in either for convenience).
*/

// Refer to the README.md for explanation on functions.
function presses(phrase) {

    // Removes the edge case of uppercase and/or lowercase letters.
    phrase = phrase.toUpperCase().split('');

    // taps is an array of strings with each string representing a button and its possible values.
    const taps = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'];
    let count = 0;
    phrase.forEach(phraseVal => {
        
        // key is the tapsEl that the phraseVal is in (so if phraseVal was 'L', then key would be 'JKL5').
        const key = taps.filter(tapsEl => {

            // Returns a number for where each phraseVal (every string in phrase because it was split) is in tapsEl (every string in the taps array).
            return tapsEl.indexOf(phraseVal) > -1;
        })[0];
        console.log(key);

        // count increments based on the phraseVal's index in the above key.
        count += key.indexOf(phraseVal) + 1;
    });
    return count;
}

console.log(presses("LOL"))
// 9

console.log(presses("WHERE DO U WANT 2 MEET L8R"))
// 47

console.log(presses("How R U"))
// 13