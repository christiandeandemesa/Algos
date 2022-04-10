// Given a linked list consisting of L nodes and given a number N. The task is to find the Nth node from the end of the linked list.

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	printList() {
		let arr = [];
		let curr = this.head;
		while (curr !== null) {
			arr.push(curr.data);
			curr = curr.next;
		}
		const str = arr.join(' -> ');
		console.log(str);
	}

	add(value) {
		const newNode = new Node(value);
		if (this.head === null) this.head = newNode;
		else {
			let curr = this.head;
			while (curr.next !== null) {
				curr = curr.next;
			}
			curr.next = newNode;
		}
		this.printList();
	}

	// This is a class method that finds the Nth node from the end of a linked list.
	getNthFromLast(N) {
		/*
        curr is the linked list's head's node.
        length will hold how many nodes are in the linked lists, and starts at 0.
        */
		let curr = this.head;
		let length = 0;

		// While curr's node exists, move curr's node to the node after itself and increment length.
		while (curr !== null) {
			curr = curr.next;
			length++;
		}

		// Removes the edge case of N being larger than the linked list's length.
		if (N > length)
			console.log(
				"The number you have chosen is greater than the linked list's number of nodes"
			);
		else {
			// Resets curr to be the linked list's head's node.
			curr = this.head;

			// For loop through the first node to Nth node of the linked list.
			for (let i = 0; i < length - N; i++) {
				curr = curr.next;
			}

			// Log the current node's data.
			console.log(curr.data);
		}
	}
}

const oneSLL = new LinkedList();
oneSLL.add('A');
// 'A'
oneSLL.add('B');
// 'A -> B'
oneSLL.add('C');
// 'A -> B -> C'
oneSLL.add('D');
// 'A -> B -> C -> D'
oneSLL.getNthFromLast(2);
// 'C'
oneSLL.getNthFromLast(5);
// 'The number you have chosen is greater than the linked list's number of nodes'
