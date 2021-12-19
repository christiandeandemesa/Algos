/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
*/

var checkInclusion = function(s1, s2) {

    // Removes the edge case of the string we are searching for (s1) being longer than the string being searched through (s2).
    if (s1.length > s2.length) {
        return false;
    }
    
    // Create a map to hold all the characters in s1.
    let map = new Map();

    /*
    Adds every character in s1 to map as a key, and gives it a value of 1. 
    If there are duplicate characters in s1, it will increment its value by 1 instead.
    */
    for (const c of s1) {
        map.set(c, map.has(c) ? map.get(c) + 1 : 1);
    }
    const len = s1.length;
    let count = 0;
    let left = 0;
    let right = 0;
    while (right < s2.length) {
        let rightChar = s2.charAt(right);

        // If the map has a key matching the character the right pointer is at in s2:
        if (map.has(rightChar)) {

            // Increment the count by one if the key still has a value.
            if (map.get(rightChar) > 0) {
                count++;
            }

            // Subtract one from the value.
            map.set(rightChar, map.get(rightChar) - 1);
        }
        
        // If the count is equal to the length, return true.
        if (count == len) {
            return true;
        }
        if (right - left + 1 == len) {
            let leftChar = s2.charAt(left);

            // If the map has a key matching the character the leftt pointer is at in s2:
            if (map.has(leftChar)) {

                // Decrement the count by one if the character was counted before.
                if (map.get(leftChar) >= 0) {
                    count--;
                }

                // Add one to the value.
                map.set(leftChar, map.get(leftChar) + 1);
            }
            left++;
        }
        right++;
    }

    // If the count never equals the length, return false.
    return false;
}

console.log(checkInclusion("ab", "eidbaooo"));
// true

console.log(checkInclusion("ab", "eidboaoo"));
// false

console.log(checkInclusion("abc", "bbbca"));
// true