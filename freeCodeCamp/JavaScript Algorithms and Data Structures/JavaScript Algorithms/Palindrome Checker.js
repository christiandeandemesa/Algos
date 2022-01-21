/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
*/

function palindrome(str) {
    for (let i = 0; i < str.length; i++) {

        /*
        .toLowerCase() because we are ignoring punctuation.
        The regex /[^a-z1-9]/g states it will look globally through the entire string for any non alpha-numeric character.
        .replace() takes the first parameter, the regex, and replaces every non alpha-numeric character with nothing (i.e. deletes it from 
        the string).
        */
        str = str.toLowerCase().replace(/[^a-z1-9]/g, '');
    }

    // Uses two-pointer technique to compare each end of the string.
    let left = 0;
    let right = str.length - 1;

    // While loop runs until both the pointers meet.
    while (left < right) {

        // If the two letters it is comparing are not the same, then this is not a palindrome.
        if (str[left] !== str[right]) return false;

        // If the two letters it is comparing are the same, move the pointers toward the middle of the string.
        else {
            left++;
            right--;
        }
    }
    return true;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
// true
console.log(palindrome("0_0 (: /-\ :) 0-0"));
// true