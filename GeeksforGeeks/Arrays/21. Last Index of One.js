// Given a string S consisting only '0's and '1's, find the last index of the '1' present in it.

function lastIndex(S) {

    // For loop through each index in S starting with last character.
    for(let i = S.length - 1; i >= 0; i--) {

        // If the current index's character is '1', return its index.
        if(S[i] === '1') return i;
    }

    // If the for loop breaks without running the if statement, then '1' is not present in the string.
    return '1 is not present in the string';
}

console.log(lastIndex('00001'));
// 4
console.log(lastIndex('0'));
// '1 is not present in the string'