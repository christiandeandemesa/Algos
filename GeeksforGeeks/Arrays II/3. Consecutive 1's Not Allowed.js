// Given a positive integer N, count all possible distinct binary strings of length N such that there are no consecutive 1’s.

function countStrings(N) {
	/*
    A represents how many binary strings can be made with the above restrictions given the last number is 0.
    B represents how many binary strings can be made with the above restrictions given the last number is 1.
    */
	let A = [1];
	let B = [1];

	// For loop through each index until we reach N...
	for (let i = 1; i < N; i++) {
		// A's element at the current index is this relation.
		A[i] = A[i - 1] + B[i - 1];

		// B's element at the current index is this relation.
		B[i] = A[i - 1];
	}

	// Return the sum of the A and B's last elements, or 0 to remove the edge case of N being less than 1.
	return A[N - 1] + B[N - 1] || 0;

	/*
    To illustrate the above:
    If N = 3, then A = [1] and B = [1]. This symbolizes that if the binary string was one character (A[0] or B[0]), then they each have one option: 0 or 1.
    After the first for loop, A = [1, 2] and B = [1, 1]. This symbolizes that if the binary string was two characters (A[1] or B[1]), then A has two options: 00 and 10
    and B has one option: 10.
    After the second for loop, A = [1, 2, 3] and B = [1, 1, 2]. This symbolizes that if the binary string was three characters (A[2] or B[2]), then A has three options:
    000, 010, 100 and B has two options: 001 and 101.
    Then the for loop breaks and we return the sum of A's last element (A[N - 1]) and B's last element (B[N - 1]), which is 5.
    */
}

console.log(countStrings(0));
// 0
console.log(countStrings(1));
// 2
console.log(countStrings(2));
// 3
console.log(countStrings(3));
// 5
