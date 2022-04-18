/*
Let's give it a try! You have a linked list and you have to implement the functionalities push and pop of stack using this given linked list. Your task is to use the 
class as shown in the comments in the code editor and complete the functions push() and pop() to implement a stack. 
*/

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

// Changed class to be a Stack.
class Stack {
	constructor() {
		// this.top will be the first node in the stack.
		this.top = null;
	}

	// This is a class method that prints the stack into an easier to read format.
	printStack() {
		let arr = [];
		let curr = this.top;
		while (curr !== null) {
			arr.push(curr.data);
			curr = curr.next;
		}
		const str = arr.join(' -> ');
		console.log(str);
	}

	// This is a class method that adds a node to the end of the stack.
	push(value) {
		// newNode is the node we want to add.
		const newNode = new Node(value);

		// If the stack is empty, the newNode is the top.
		if (this.top === null) this.top = newNode;
		// If the stack is not empty, run curr until its following node is null then make that the newNode.
		else {
			let curr = this.top;
			while (curr.next !== null) {
				curr = curr.next;
			}
			curr.next = newNode;
		}
		this.printStack();
	}

	// This is a class method that removes the last node in the stack.
	pop() {
		// If the stack is empty, log this message.
		if (this.top === null) console.log('Cannot pop because stack is empty');
		// If the stack only has the top node, change it to be null.
		else if (this.top.next === null) {
			this.top = null;
			this.printStack();

			// If the stack has more than one node, run curr until the next next node is null, then change the next node to be null.
		} else {
			let curr = this.top;
			while (curr.next.next !== null) {
				curr = curr.next;
			}
			curr.next = null;
			this.printStack();
		}
	}
}

const oneStack = new Stack();
oneStack.push('A');
// 'A'
oneStack.push('B');
// 'A -> B'
oneStack.push('C');
// 'A -> B -> C'
oneStack.pop();
// 'A -> B'
oneStack.pop();
// 'A'
oneStack.pop();
// ''
oneStack.push('A');
// 'A'
