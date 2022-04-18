/*
Given a linked list of N nodes where nodes can contain values 0s, 1s, and 2s only. The task is to segregate 0s, 1s, and 2s linked list such that all zeros segregate to 
head side, 2s at the end of the linked list, and 1s in the mid of 0s and 2s.
*/

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

	// This is a class method that sorts all the 0, 1, and 2 nodes in a linked list.
	segregate() {
		/*
		curr is the linked list starting at the head node.
		arr will hold all the linked list's nodes' data in order.
		*/
		let curr = this.head;
		let arr = [];

		// Adds each node's data to the array.
		while (curr !== null) {
			arr.push(curr.data);
			curr = curr.next;
		}

		/*
		Restarts curr at the linked list's head node.
		newHead will hold the modified linked list starting at the head node.
		*/
		curr = this.head;
		let newHead = null;

		// Sorts all the numbers in arr from lowest to highest.
		arr.sort((a, b) => a - b);

		// The curr's data is changed to be arr's first element and removes that element from arr.
		while (curr !== null) {
			curr.data = arr[0];
			arr.shift();

			// newHead is changed to be the linked list's head node.
			if (newHead === null) newHead = curr;
			curr = curr.next;
		}

		// Assigns the linked list's head node to be newHead.
		this.head = newHead;
		this.printList();
	}
}

const oneSLL = new LinkedList();
oneSLL.add(2);
// '2'
oneSLL.add(0);
// '2 -> 0'
oneSLL.add(1);
// '2 -> 0 -> 1'
oneSLL.segregate();
// '0 -> 1 -> 2'
