// Given a linked list of N nodes. The task is to reverse this list.

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

	// This is a class method that reverses a linked list.
	reverseList() {
		/*
        curr starts at the linked list's head's node.
        Initializes prev as null because we need it in the below while loop.
        */
		let curr = this.head;
		let prev = null;

		// While curr's node exists...
		while (curr !== null) {
			// temp is the node after curr's node.
			let temp = curr.next;

			// The node after curr's node is prev's node.
			curr.next = prev;

			// prev's node is curr's node.
			prev = curr;

			// curr's node is temp's node.
			curr = temp;
		}

		// The linked list's head is prev's node.
		this.head = prev;

		/*
        To illustrate the above method:
        If a linked list is A -> B -> C, then curr is A -> B -> C and prev is null.
        In the first while loop run, temp is B -> C, curr.next is null, prev is A, and curr is B -> C.
        In the second while loop run, temp is C, curr.next is A, prev is B -> A, and curr is C.
        In the third while loop run, temp is null, curr.next is B -> A, prev is C -> B -> A, and curr is null.
        Then the while loop breaks because there are only three nodes in the linked list, and this.head becomes prev.
        */
		this.printList();
	}
}

const oneSLL = new LinkedList();
oneSLL.add('A');
// 'A'
oneSLL.add('B');
// 'A -> B'
oneSLL.add('C');
// 'A -> B -> C'
oneSLL.reverseList();
// 'C -> B -> A'
oneSLL.reverseList();
// 'A -> B -> C'
