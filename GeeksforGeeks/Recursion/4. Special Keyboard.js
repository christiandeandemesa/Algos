/*
Imagine you have a special keyboard with the following keys: 

Key 1:  Prints 'A' on screen
Key 2: (Ctrl-A): Select screen
Key 3: (Ctrl-C): Copy selection to buffer
Key 4: (Ctrl-V): Print buffer on screen appending it after what has already been printed.

Find maximum numbers of A's that can be produced by pressing keys on the special keyboard N times. 
*/

function optimalKeys(N) {
	/*
    If N is less than 7, the optimal keys is pressing Key 1 N times. 
    This is also the break case if the function is called recursively.
    */
	if (N < 7) return N;

	// max will hold the maximum number of A's.
	let max = 0;

	// For loop by decrementing i until its 1...
	for (let i = N - 3; i >= 1; i--) {
		// curr is the current optimal string with the below length.
		let curr = (N - i - 1) * optimalKeys(i);

		// If curr is greater than max, change max to be curr.
		if (curr > max) max = curr;
	}
	return max;
}

console.log(optimalKeys(3));
// 3
console.log(optimalKeys(7));
// 9
