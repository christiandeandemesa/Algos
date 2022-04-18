/*
Implement a Queue using Linked List. 
A Query Q is of 2 Types
(i) pushing 'value' into the queue
(ii) popping a node from the queue
*/

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

// Changed class to be a Queue.
class Queue {
	constructor() {
		// this.front will be the first node in the queue.
		this.front = null;
		// this.rear will be the last node in the queue.
		this.rear = null;
	}

	// This is a class method that prints the queue into an easier to read format.
	printQueue() {
		let arr = [];
		let curr = this.front;
		while (curr !== null) {
			arr.push(curr.data);
			curr = curr.next;
		}
		const str = arr.join(' -> ');
		console.log(str);
	}

	// This is a class method that adds a node to the end of the queue.
	push(value) {
		// newNode is the node we want to add.
		const newNode = new Node(value);

		// If the queue is empty, the newNode is both the front and rear since it is the only node.
		if (this.front === null) {
			this.front = newNode;
			this.rear = newNode;

			// If the queue is not empty, the last node in this.front (this.rear.next) is the newNode, and the only rear node (this.rear) is also newNode.
		} else {
			this.rear.next = newNode;
			this.rear = newNode;
		}
		this.printQueue();
	}

	// This is a class method that removes the first node in the queue.
	pop() {
		// If the queue is empty, log this message.
		if (this.front === null) console.log('Cannot pop because queue is empty');
		// If the queue is not empty...
		else {
			// Moves this.front to be the following node, thus removing the original this.front's node.
			this.front = this.front.next;

			// If this.front's node does not exist, then changes this.rear to also be null since the queue is empty.
			if (this.front === null) this.rear = null;
			this.printQueue();
		}
	}
}

const oneQ = new Queue();
oneQ.push('A');
// 'A'
oneQ.push('B');
// 'A -> B'
oneQ.push('C');
// 'A -> B -> C'
oneQ.pop();
// 'B -> C'
