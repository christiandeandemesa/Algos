/*
Given a string S, find the longest palindromic substring in S. Substring of string S: S[ i . . . . j ] where 0 ≤ i ≤ j < len(S). Palindrome string: A string which reads 
the same backwards. More formally, S is palindrome if reverse(S) = S. In case of conflict, return the substring which occurs first (with the least starting index).
*/

function longestPalin(S) {

    // If S is less than two characters, it is automatically the longest palindrome so return itself.
    if(S.length < 2) return S;

    /*
    maxLength will be the length of the longest palindrome in S.
    start will be the index of the first character in the longest palindrome.
    */
    let maxLength = 1;
    let start = 0;

    /*
    For loop through every index in S.
    We start at 1 and end at the second to last index in S because below we will be using a left and right pointer that will be adjacent to i.
    */
    for(let i = 1; i < S.length - 1; i++) {

        /*
        left is the index to the left of i.
        right is the index to the right of i.
        */
        let left = i - 1;
        let right = i + 1;

        // Increment right as long as it does not move beyond the last index in S, and the letters at right's index and i's index are the same.
        while(right < S.length && S[right] === S[i]) {
            right++;
        }

        // Decrement left as long as it does not move beyond the first index in S, and the letters at left's index and i's index are the same.
        while(left >= 0 && S[left] === S[i]) {
            left--;
        }

        /*
        Increments right and decrements left as long as right is not beyond S's last index, left is not beyond S's first index, and the letters at right's index and left's 
        index are the same.
        */
        while(right < S.length && left >= 0 && S[right] === S[left]) {
            right++;
            left--;
        }

        // length is the current palindrome's length, and we subtract 1 because it is indexed at zero.
        let length = right - left - 1;

        // Changes maxLength to reflect the longest length we have seen.
        if(maxLength < length) {
            maxLength = length;
            start = left + 1;
        }
    }

    // Returns a substring from within S, starting at the character at start's index and ending at the character at maxLength plus start's index.
    return S.substring(start, maxLength + start);
}

console.log(longestPalin('aaaabbaa'));
// 'aabbaa'
console.log(longestPalin('adbcba'));
// 'bcb'
console.log(longestPalin('abc'));
// 'a'