/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the 
even-indexed characters of S, this process should be repeated N times.

Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

function encrypt(text, n) {

    // Returns the string (text) if it's an empty string, or n is a non-positive number.
    if (!text || n < 1) {
        return text;
    }

    // While loop that runs a for loop multiple times.
    while (n > 0) {

        // Declares an empty string in case the while loop runs both for loops below more than once.
        let newStr = '';

        // This for loop grabs every odd value in the string, and adds it to an empty string.
        for (let i = 1; i < text.length; i += 2) {
            newStr += text[i];
        }

        // This for loop grabs every even value in the string, and adds it to the previous string.
        for (let i = 0; i < text.length; i += 2) {
            newStr += text[i];
        }

        // Changes text to the new string, so we can modify it in the while loop again.
        text = newStr;

        // Decrements n to eventually break out of the while loop.
        n--;
    }
    return text;
}

console.log(encrypt("This is a test!", 0)); // "This is a test!"
console.log(encrypt("This is a test!", 1)); // "hsi  etTi sats!"
console.log(encrypt("This is a test!", 2)); // "s eT ashi tist!"
console.log(encrypt("This is a test!", 3)); // " Tah itse sits!"
console.log(encrypt("This is a test!", 4)); // "This is a test!"
console.log(encrypt("This is a test!", -1)); // "This is a test!"
console.log(encrypt("This kata is very interesting!", 1)); // "hskt svr neetn!Ti aai eyitrsig"

// This function is similar to the one above. See if you can figure out how it works!
function decrypt(encryptedText, n) {
    if (!encryptedText || n < 1) return encryptedText;
    const ans = new Array(encryptedText.length);
    while (n > 0) {
        let j = 0;
        for (let i = 1; i < ans.length; i += 2) {
            ans[i] = encryptedText[j++];
        }
        for (let i = 0; i < ans.length; i += 2) {
            ans[i] = encryptedText[j++];
        }
        encryptedText = ans.join('');
        n--;
    }
    return encryptedText;
}

console.log(decrypt("This is a test!", 0)); // "This is a test!"
console.log(decrypt("hsi  etTi sats!", 1)); // "This is a test!"
console.log(decrypt("s eT ashi tist!", 2)); // "This is a test!"
console.log(decrypt(" Tah itse sits!", 3)); // "This is a test!"
console.log(decrypt("This is a test!", 4)); // "This is a test!"
console.log(decrypt("This is a test!", -1)); // "This is a test!"
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)); // "This kata is very interesting!"