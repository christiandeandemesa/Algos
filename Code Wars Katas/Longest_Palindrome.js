/*
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.
*/

// Refer to the README.md for explanation on functions.
const longestPalindrome = function (s) {

    // Removes the edge case of an empty string.
    if (!s) {
        return 0;
    }

    /*
    First for loop goes from the last index to the first index in the string, and the second for loop goes from the first index to the last 
    index in the string.
    */
    for (let i = s.length; i > 0; i--) {
        for (let j = 0; j <= s.length - i; j++) {
            let newStr = s.substr(j, i);

            /*
            If statement checks to see if the string at this point in time is a palindrome. If it is, it will return i because it is the
            biggest number since it is starting from the end of the string. If it isn't a palindrom, it will run the for loops again until it
            finds a palindrome, or until newStr is a single letter in which case it will return 1.
            */
            if (newStr === newStr.split("").reverse().join("")) {
                return i;
            }
        }
    }
}

console.log(longestPalindrome(""));
// 0

console.log(longestPalindrome("a"));
// 1

console.log(longestPalindrome("aa"));
// 2

console.log(longestPalindrome("baa"));
// 2

console.log(longestPalindrome("aab"));
// 2

console.log(longestPalindrome("zyabyz"));
// 1

console.log(longestPalindrome("baabcd"));
// 4

console.log(longestPalindrome("baablkj12345432133d"));
// 9