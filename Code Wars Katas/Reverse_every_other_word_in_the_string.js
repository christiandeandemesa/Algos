/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is 
exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

// Refer to the README.md for explanation on functions.
function reverse(str) {
    let arr = str.split(' ');
    let newArr = [];

    // Reverse every other word
    for(let i = 0; i < arr.length; i++) {
        i%2 === 1 ? newArr.push(arr[i].split('').reverse().join('')) : newArr.push(arr[i]);
    }
    return newArr.join(' ').trim();
}

console.log(reverse("Reverse this string, please!"));
// "Reverse siht string, !esaelp"

console.log(reverse("I really don't like reversing strings!"));
// "I yllaer don't ekil reversing !sgnirts"