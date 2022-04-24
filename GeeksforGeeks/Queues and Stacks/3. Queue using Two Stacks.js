/*
Implement a Queue using 2 stacks s1 and s2 .
A Query Q is of 2 Types
(i) a query of this type means  pushing 'x' into the queue
(ii) a query of this type means to pop element from queue and print the poped element
*/

class Stack {
	constructor() {
		this.items = [];
	}
}

class Queue {
	// constructor assings an empty array, from the Stack constructor above, to both s1 and s2.
	constructor() {
		this.s1 = new Stack();
		this.s2 = new Stack();
	}

	// This is a class method that prints the Queue.
	printQueue() {
		// this.s1.items is the Queue's s1's items array, and it is joined into a string.
		console.log(this.s1.items.join(' '));
	}

	// This is a class method that adds a value to the end of the queue.
	push(value) {
		// s1 represents this.front so we add value to the end of it.
		this.s1.items.push(value);
		// s2 represents this.rear so we change its only element to be the value in an array.
		this.s2.items = [value];
		this.printQueue();
	}

	// This is a class method that removes a value from the end of the queue.
	pop() {
		// Removes the last element from s1, and logs it.
		console.log('Popped: ' + this.s1.items.pop());
		// Replaces s2's element to be s1's last element.
		this.s2.items = [this.s1.items[this.s1.items.length - 1]];
		this.printQueue();
	}
}

const oneQ = new Queue();
oneQ.push('A');
// 'A'
oneQ.push('B');
// 'A B'
oneQ.push('C');
// 'A B C'
oneQ.pop();
// 'Popped: C'
// 'A B'
