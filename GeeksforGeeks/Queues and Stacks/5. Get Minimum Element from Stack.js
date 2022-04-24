// You are given N elements and your task is to Implement a Stack in which you can get minimum element in O(1) time.

class Stack {
	constructor() {
		this.items = [];
	}

	printStack() {
		console.log(this.items.join(' '));
	}

	push(element) {
		this.items.push(element);
		this.printStack();
	}

	// This is a class method that finds the smallest element in a stack.
	getMin() {
		// Removes the edge case of an empty stack.
		if (this.items.length === 0) console.log('Stack is empty');
		else {
			// min starts at the largest number in JavaScript.
			let min = Number.MAX_SAFE_INTEGER;

			// For loop through each index in the stack, and if min is greater than the element at the current index, min becomes that element.
			for (let i = 0; i < this.items.length; i++) {
				if (min > this.items[i]) min = this.items[i];
			}
			console.log(min);
		}
	}
}

const oneStack = new Stack();
oneStack.getMin();
// 'Stack is empty'
oneStack.push(2);
// '2'
oneStack.getMin();
// '2'
oneStack.push(1);
// '2 1'
oneStack.getMin();
// '1'
