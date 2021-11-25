/*
How many ways can you make the sum of a number?

"In number theory and combainatorics, a partition of a positive integer n, also called an interger partition, is a way of writing n as a sum of
positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes 
a composition. For example, 4 can be partitioned five distinct ways."

4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1
*/

function sum(num, total = num) {

    // Breaks the recursion, and removes the edge case of num being equal to 0.
    if(num === 0) {
        return 1;
    }

    // Breaks the recursion, and removes the edge case of num being less than 0, or total is 0.
    if(num < 0 || total === 0) {
        return 0;
    }

    // Uses recursion to invoke the same function within itself.
    return result = sum(num, total - 1) + sum(num - total, total);
}

console.log(sum(-1));
// 0

console.log(sum(0));
// 1

console.log(sum(1));
// 1

console.log(sum(2));
// 2

console.log(sum(3));
// 3

console.log(sum(4));
// 5

console.log(sum(5));
// 7

console.log(sum(10));
// 42