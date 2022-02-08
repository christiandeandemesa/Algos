/*
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:
1. The length of the segment matches Ron's birth month, and,
2. The sum of the integers on the squares is equal to his birth day.

Determine how many ways she can divide the chocolate.
*/

function birthday(s, d, m) {

    /*
    start tracks the index of the first number added to sum.
    sum tracks the sum of numbers.
    count is the result we want from this function.
    */
    let start = 0;
    let sum = 0;
    let count = 0;

    // For loop to go through every number in array s.
    for(let i = 0; i < s.length; i++) {

        // Adds the number at the current index to sum.
        sum += s[i];

        // If the current index minus the start index plus one is equal to m...
        if(i - start + 1 === m) {

            // If the sum is equal to d, increment count.
            if(sum === d) count++;

            /*
            Subtract the number at the start index from sum.
            Increment start.
            */
            sum -= s[start];
            start++;
        }
    }
    return count;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
// 2