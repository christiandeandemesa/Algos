// Given two linked lists, the task is to complete the function findIntersection(), that returns the intersection of two linked lists. Each of the two linked list contains distinct node values.

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
	}

	// This is a class method that finds all similar nodes in both linked lists, and creates a new linked list with all the nodes in the first linked list's order.
	findIntersection(secondSLL) {
		/*
		intersectedSLL will be the linked list that holds all the similar nodes.
		firstHead is the first linked list starting at its head node.
		secondHead is the second linked list starting at its head node.
		*/
		const intersectedSLL = new LinkedList();
		let firstHead = this.head;
		let secondHead = secondSLL.head;

		// While a node in the first linked list exists...
		while (firstHead !== null) {
			// While a node in the second linked list exists...
			while (secondHead !== null) {
				// If the nodes in the first and second linked list are the same, use the add class method to add the first linked list's node to intersectedSLL.
				if (firstHead.data === secondHead.data) intersectedSLL.add(firstHead.data);

				// Move the second linked list's node to the next node.
				secondHead = secondHead.next;
			}

			// Move the first linked list's node to the next node.
			firstHead = firstHead.next;

			// Resets the second linked list's node to its original head since it becomes null after the above while loop breaks.
			secondHead = secondSLL.head;
		}
		return intersectedSLL;
	}
}

const oneSLL = new LinkedList();
oneSLL.add(9);
oneSLL.add(6);
oneSLL.add(4);
oneSLL.add(2);
oneSLL.add(3);
oneSLL.add(8);
oneSLL.printList();
// '9 -> 6 -> 4 -> 2 -> 3 -> 8'

const twoSLL = new LinkedList();
twoSLL.add(1);
twoSLL.add(2);
twoSLL.add(8);
twoSLL.add(6);
twoSLL.printList();
// '1 -> 2 -> 8 -> 6'

const threeSLL = oneSLL.findIntersection(twoSLL);
threeSLL.printList();
// '6 -> 2 -> 8'
