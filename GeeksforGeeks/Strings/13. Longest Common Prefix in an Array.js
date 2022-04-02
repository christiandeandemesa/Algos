// Given a array of strings, find the longest common prefix among all strings present in the array.

function longestCommonPrefix(arr) { 

    // Removes the edge case of arr being an empty array.
    if(!arr[0]) return '';

    // If arr only has one string, return that string.
    if(arr.length === 1) return arr[0];

    let i = 0;

    // While arr's first word's (arr[0]) current letter ([i]) exists and all of arr's words' current letters (word[i]) are the same (word[i] === arr[0][i]), increment i.
    while(arr[0][i] && arr.every(word => word[i] === arr[0][i])) {
        i++;
    }

    // Returns a substring of arr's first word from the first index to whatever index i is at.
    return arr[0].substr(0, i);
}

console.log(longestCommonPrefix(['geeksforgeeks', 'geeks', 'geek', 'geezer']));
// 'gee'
console.log(longestCommonPrefix(['hello', 'world']));
// ''
console.log(longestCommonPrefix([]));
// ''
console.log(longestCommonPrefix(['one']));
// 'one'