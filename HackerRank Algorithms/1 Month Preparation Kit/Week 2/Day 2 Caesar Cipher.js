/*
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of 
letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 
3, w, x, y and z would map to z, a, b and c.
*/

function caesarCipher(s, k) {

    // Instnatiates an array where each element is a character in the string.
    let charArr = s.split('');

    /*
    rotate is the new number that represents how many rotations needed minimum (e.g. if k = 52, then rotate = 0, so we don't need to
    rotate the array).
    */
    let rotate = k % 26;
    let result = '';

    // For loop to go through every element in charArr.
    for(let i = 0; i < charArr.length; i++) {

        // Instantiates code as the UTF-16 code of the given character.
        let code = charArr[i].charCodeAt();

        // 65 - 90 is A - Z in UTF-16 code.
        if(65 <= code && code <= 90) {

            /*
            If the sum of code and rotate is greater than 90, which is Z, subtract 26 to loop back to 65 (e.g. If code is 90, which is Z, 
            and rotate is 1, result = 90 + (1 - 26) = 65, which is A).
            */
            result = code + (code + rotate > 90 ? rotate - 26 : rotate);

            // The character is replaced by UTF-16 code (result) converted into the corresponding character as a string.
            charArr[i] = String.fromCharCode(result);
        }

        // 97 - 122 is a - z in UTF-16 code, and works similar to the above if code block.
        else if(97 <= code && code <= 122) {
            result = code + (code + rotate > 122 ? rotate - 26 : rotate);
            charArr[i] = String.fromCharCode(result);
        }

        // If the character is not a letter (e.g. whitespace and hypens), it is skipped over.
    }

    // Returns the charArr as a string.
    return charArr.join('');
}

console.log(caesarCipher('middle-Outz', 2));
// 'okffng-Qwvb'