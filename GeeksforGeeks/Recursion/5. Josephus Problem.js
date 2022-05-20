/*
Given the total number of persons n and a number k which indicates that k-1 persons are skipped and kth person is killed in circle in a fixed direction.

The task is to choose the safe place in the circle so that when you perform these operations starting from 1st place in the circle, you are the last one remaining and 
survive.
*/

function josephus(n, k) {
	// Removes the edge case of n being 1 since that is the only safe place, and is our recursive function's break case.
	if (n === 1) return 1;
	/*
    To visualize the following:
    First it runs josephus(3, 2) which returns josephus(2, 2).
    josephus(2, 2) returns josephus(1, 2).
    josephus(1, 2) hits our break case and returns 1.
    josephus(2, 2) returns ((1 + 2 - 1) % 2) + 1 which is 1.
    josephus(3, 2) returns ((1 + 2 - 1) % 3) + 1 which is 3.
    */ else return ((josephus(n - 1, k) + k - 1) % n) + 1;
}

console.log(josephus(3, 2));
// 3
console.log(josephus(5, 3));
// 4
