/*
Given an integer n, find each x such that:
    0 <= x <= n
    n + x = n ^ x
where ^ denotes the bitwise XOR operator. Return the number of x's satisfying the criteria.
*/

function sumXor(n) {

    // Removes the edge case of n being 0.
    if(n === 0) return 1

    // binary is the binary version of a given number (n) as a string (e.g. if n = 2, then binary = '10').
    let binary = n.toString(2)

    /*
    count is the number of zeroes in the binary number.
    .split('') turns binary into an array where each element is a digit.
    .reduce() applies the given function on every element in an array.
    */
    let count = binary.split('').reduce((prev, curr)=>{ 
        if(curr === '0') prev++
        return prev;

    // 0 is is the initial value.
    }, 0)
    return 2 ** count;
}

console.log(sumXor(4));
// 4
console.log(sumXor(5));
// 2
console.log(sumXor(0));
// 1