// Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {

    // max will be the length of the longest substring in s.
    let max = 0;

    // left is the pointer at the beginning of the substring whose length is being counted.
    let left = 0;
    let charSet = new Set();

    // Iterate through a loop using the right pointer.
    for(let right = 0; right < s.length; right++) {

        // Checks if the character at the right pointer (i.e. s[right]) exists in the set (i.e. charSet).
        while(charSet.has(s[right])) {

            // Deletes the character where the left pointer is, and moves the left pointer to the next character.
            charSet.delete(s[left]);
            left++;
        }

        // Adds the character at the right pointer after the above while loop removes duplicates of it.
        charSet.add(s[right]);

        // Changes the value of max if the new substring's length is greater than the previous substring's length.
        max = Math.max(max, right - left + 1);
    }
    return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
// 3

console.log(lengthOfLongestSubstring("bbbbb"));
// 1

console.log(lengthOfLongestSubstring("pwwkew"));
// 3