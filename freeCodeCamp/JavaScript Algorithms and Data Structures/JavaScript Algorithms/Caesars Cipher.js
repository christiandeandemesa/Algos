/*
A common modern use of Caesar's cipher is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A => N, B => O 
and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {

    // Removes the edge case of the passed argument not being a string.
    if(typeof str !== 'string') return 'Input is not a string';

    // Removes the edge case of a string with different case-sensitive letters.
    let arr = str.toUpperCase().split('');

    // cipher holds the entire alphabet plus the first 13 letters of the alphabet attached to the end.
    const cipher = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
    for (let i = 0; i < arr.length; i++) {

        /*
        .indexOf() takes a string (cipher) and a given element (arr[i]), and returns the index where the element
        is located in the string as a number.
        If the element does not exist in the string (e.g. there are no spaces in cipher), it returns -1.
        Changes the current letter in the array (arr[i]) to be its equivalent in cipher plus 13.
        For example, if arr[0] = G, then cipher.indexOf('G') = 6, and the new value for arr[i] = cipher[6 + 13] = 
        cipher[19] = 'T'.
        */
        if (cipher.indexOf(arr[i]) >= 0) arr[i] = (cipher[cipher.indexOf(arr[i]) + 13]);
    }
    return arr.join('');
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
// 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
console.log(rot13(1));
// 'Input is not a string'