/*
We define super digit of an integer x using the following rules:

Given an integer, we need to find the super digit of the integer.
    If x has only 1 digit, then its super digit is x.
    Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.

For example, the super digit of 9875 will be calculated as:
super_digit(9875) is 9 + 8 + 7 + 5 = 29.
super_digit(29) is 2 + 9 = 11.
super_digit(11) is 1 + 1 = 2.
*/

function superDigit(n, k) {

    // Break case if n is a single digit number, which returns n as a number.
    if(n.length === 1) return Number(n);

    /*
    If k is 0, instantiates newNum as the current n.
    If k is not 0, instantiates newNum as an empty string.
    */
    let newNum;
    if(k === 0) newNum = n;
    else newNum = '';

    // While k is greater than 0, adds n as a string to newNum repeatedly.
    while(k > 0) {
        newNum += n;
        k--
    }

    // sum is the sum of all the digits in newNum.
    let sum = 0;
    for(let i = 0; i < newNum.length; i++) {
        sum += Number(newNum[i]);
    }

    // Calls on this function recursively with sum set as a string to be used as the new n.
    return superDigit(String(sum), k);
}

console.log(superDigit('148', 3))
// 3
console.log(superDigit('9875', 4))
// 8