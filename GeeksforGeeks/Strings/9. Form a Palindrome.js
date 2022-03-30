// Given a string, find the minimum number of characters to be inserted to convert it to palindrome.

// start represents the index of the first character in str, and end represents the index of the last character in str.
function countMin(str, start = 0, end = str.length - 1) {

    // Break case for if start is greater than end, and it returns the largest possible integer for Math.min() below.
    if(start > end) return Number.MAX_SAFE_INTEGER;

    // Break case for if start is equal to end, and it returns 0 for Math.min() below.
    else if(start === end) return 0;

    /*
    Break case for if start is 1 less than end.
    If the characters at both start and end's indices are the same, it returns 0. Otherwise it returns 1.
    */
    else if (start === end - 1) return str[start] === str[end] ? 0 : 1;

    /*
    If the characters at both start and end's indices are the same, recursively run the function with start and end moved over one index.
    Otherwise, run the function recursively twice: the first only moving start's index and the second only moving end's index. 
    Then use Math.min() to pick the smallest number returned from either of the two functions.
    */
    else return str[start] === str[end] ? countMin(str, start + 1, end - 1) : Math.min(countMin(str, start + 1), countMin(str, start, end - 1)) + 1;
}

console.log(countMin('abcd'));
// 3
console.log(countMin('aa'));
// 0
console.log(countMin('acba'));
// 1