/*
Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove 
just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string s, determine 
if it is valid. If so, return YES, otherwise return NO.
*/

function isValid(s) {
    let strCount = {};

    // For loop through every character in s. 
    for (let i = 0; i < s.length; i++) {

        /*
        If the character is a key in the strCount object, increment its value by 1.
        If the character is not a key, give it a value of 1.
        */
        strCount[s[i]] ? strCount[s[i]] += 1 : strCount[s[i]] = 1;
    }

    // count is the value of each key in strCount sorted from lowest to highest numerically.
    let count = Object.values(strCount).sort((a, b) => a - b);

    // If the lowest and highest numbers are the same, the string is valid (e.g. [1, 1, 1] are all the same frequency).
    if (count[0] === count[count.length - 1]) return 'YES';

    /*
    If the lowest and second highest numbers are the same, and the lowest and highest numbers only have a difference of 1, the string is 
    valid (e.g. [1, 1, 2] can all be the same frequency by removing 1 from 2).
    */
    else if (count[0] === count[count.length - 2] && count[count.length - 1] - count[0] === 1) return 'YES';

    /*
    If the lowest number is 1, and the second lowest number and highest number are the same, the string is valid (e.g. [1, 2, 2] can all be
    the same frequency by removing 1 from 1).
    */
    else if (count[0] === 1 && count[1] === count[count.length - 1]) return 'YES';
    
    // Otherwise it is not a valid string.
    else return 'NO';
}

console.log(isValid('abc'));
// 'YES'
console.log(isValid('abcc'));
// 'YES'
console.log(isValid('abccc'));
// 'NO'