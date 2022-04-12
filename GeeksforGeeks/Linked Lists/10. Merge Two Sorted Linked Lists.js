// Given two sorted linked lists consisting of N and M nodes respectively. The task is to merge both of the list (in-place) and return head of the merged list.

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

		// Removed the printList() method, to avoid multiple logs in the below sortedMerge method.
	}

	sortedMerge(secondSLL) {
		/*
		mergedSLL is a new linked list to hold all the nodes from both linked lists.
		firstHead is the first linked list starting at its head node.
		secondHead is the second linked list starting at its head node.
		*/
		const mergedSLL = new LinkedList();
		let firstHead = this.head;
		let secondHead = secondSLL.head;

		// While a node in either the first or second linked list exists...
		while (firstHead !== null || secondHead !== null) {
			// If the first linked list's node does not exist, add the second linked list's node and move it to the next node.
			if (firstHead === null) {
				mergedSLL.add(secondHead.data);
				secondHead = secondHead.next;

				// If the second linked list's node does not exist, add the first linked list's node and move it to the next node.
			} else if (secondHead === null) {
				mergedSLL.add(firstHead.data);
				firstHead = firstHead.next;

				// Notice the above else if statements must come before the below else if statements.

				// If the the first linked list's node is less than or equal to the second linked list's node, add the first linked list's node and move it to the next node.
			} else if (firstHead.data <= secondHead.data) {
				mergedSLL.add(firstHead.data);
				firstHead = firstHead.next;

				// If the first linked list's node is greater than the second linked list's node, add the second linked list's node and move it to the next node.
			} else {
				mergedSLL.add(secondHead.data);
				secondHead = secondHead.next;
			}
		}
		return mergedSLL;
	}
}

const oneSLL = new LinkedList();
oneSLL.add(5);
oneSLL.add(10);
oneSLL.add(25);
oneSLL.add(40);
oneSLL.printList();
// '5 -> 10 -> 25 -> 40'

const twoSLL = new LinkedList();
twoSLL.add(2);
twoSLL.add(3);
twoSLL.add(5);
twoSLL.add(20);
twoSLL.printList();
// '2 -> 3 -> 5 -> 20'

const threeSLL = oneSLL.sortedMerge(twoSLL);
threeSLL.printList();
// '2 -> 3 -> 5 -> 5 -> 10 -> 20 -> 25 -> 40'
