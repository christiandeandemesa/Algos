/*
Given a singly linked list of size N. The task is to swap elements in the linked list pairwise.
For example, if the input list is 1 2 3 4, the resulting list after swaps will be 2 1 4 3.
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

	// This is a class method that swaps the positions of every pair of nodes in a linked list.
	pairWiseSwap() {
		// curr is the linked list starting at the first node.
		let curr = this.head;

		// While the current node and the node after itself exists...
		while (curr !== null && curr.next !== null) {
			/*
            temp is the current node's value.
            The current node's value (curr.data) changes to be the next node's value (curr.next.data).
            The next node's value changes to be the current node's value using temp.
            Moves to the next next node since we are swapping independent pairs.
			*/
			let temp = curr.data;
			curr.data = curr.next.data;
			curr.next.data = temp;
			curr = curr.next.next;
		}
		this.printList();
	}
}

const oneSLL = new LinkedList();
oneSLL.add(1);
// '1'
oneSLL.add(2);
// '1 -> 2'
oneSLL.add(3);
// '1 -> 2 -> 3'
oneSLL.pairWiseSwap();
// '2 -> 1 -> 3'
oneSLL.add(4);
// '2 -> 1 -> 3 -> 4'
oneSLL.pairWiseSwap();
// '1 -> 2 -> 4 -> 3'
