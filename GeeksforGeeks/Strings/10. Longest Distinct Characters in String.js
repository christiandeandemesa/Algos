// Given a string S, find length of the longest substring with all distinct characters. 

function longestSubstrDistinctChars(S) {

    /*
    seen is a map object.
    maxLength will hold the longest substring of distinct characters.
    */
    let seen = new Map();
    let maxLength = 0;

    // start represents the first index in S.
    let start = 0;

    // For loop through each index in S starting at the last index.
    for (let end = 0; end < S.length; end++) {

        /*
        .has() checks if the character at the current index (S[end]) already exists in the seen map.
        If the character does exist, Math.max() returns the bigger of the two numbers: start, or the value of the last character added to the map plus 1 since the map is 
        indexed at 0.
        */
        if (seen.has(S[end])) start = Math.max(start, seen.get(S[end]) + 1);

        // .set() adds a key-value pair to the map, where the character is the key and its index is the value.
        seen.set(S[end], end)

        // maxLength is either itself or end minus start plus one.
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}

console.log(longestSubstrDistinctChars('geeksforgeeks'));
// 7
console.log(longestSubstrDistinctChars('aewergrththy'));
// 4