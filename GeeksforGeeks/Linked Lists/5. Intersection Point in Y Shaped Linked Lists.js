// Given two singly linked lists of size N and M, write a program to get the point where two linked lists intersect each other.

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

	// This is a class method that finds the node(s) where two linked lists intersect.
	intersectPoint(head2) {
		// Removes the edge case of either linked list having no nodes.
		if (this.head === null || head2.head === null)
			return `There is no intersection between the linked lists`;

		/*
        length1 is the first linked list's length (e.g. oneSLL).
        length2 is the second linked list's length (e.g. twoSLL).
        diff is the absolute value of the difference between length1 and length2, and absolute value is used in case length2 is greater than length1.
        */
		let length1 = this.getLength();
		let length2 = head2.getLength();
		let diff = Math.abs(length1 - length2);

		/*
        bigLength is the larger value between length1 and length2 (e.g. if length1 = 5 and length2 = 3, then bigLength = length1).
        Initializes bigCurr and smallCurr here because it can't be initialized inside an if statement.
        */
		let bigLength = Math.max(length1, length2);
		let bigCurr = null;
		let smallCurr = null;

		// If length1 is the larger value, bigCurr is the first linked list and smallCurr is the second linked list.
		if (bigLength === length1) {
			bigCurr = this.head;
			smallCurr = head2.head;
		}

		// If length2 is the larger value, bigCurr is the second linked list and smallCurr is the first linked list.
		else if (bigLength === length2) {
			bigCurr = head2.head;
			smallCurr = this.head;
		}

		// For loop through each number up to diff, to shorten bigCurr to smallCurr's length so it can be compared in the below while loop.
		for (let i = 0; i < diff; i++) {
			// bigCurr's node is the node after itself.
			bigCurr = bigCurr.next;
		}

		// While bigCurr's node and smallCurr's node exist...
		while (bigCurr !== null && smallCurr !== null) {
			// If both of their nodes have the same data, return bigCurr.data because that is the intersection point.
			if (bigCurr.data === smallCurr.data) return bigCurr.data;

			// bigCurr's node is the node after itself.
			bigCurr = bigCurr.next;

			// smallCurr's node is the node after itself.
			smallCurr = smallCurr.next;
		}

		// If the while loop breaks without running the if statement, there is no intersection point.
		return `There is no intersection between the linked lists`;
	}

	// This is a class method that finds a linked list's length.
	getLength() {
		/*
        curr is the linked list's head's node.
        length will hold the length of curr.
        */
		let curr = this.head;
		let length = 0;

		// Whihle curr's node exists...
		while (curr !== null) {
			/*
            curr's node is the node after itself.
            length increments.
            */
			curr = curr.next;
			length++;
		}
		return length;
	}
}

oneSLL = new LinkedList();
oneSLL.add(3);
// 3
oneSLL.add(6);
// 3 -> 6
oneSLL.add(9);
// 3 -> 6 -> 9
oneSLL.add(15);
// 3 -> 6 -> 9 -> 15
oneSLL.add(30);
// 3 -> 6 -> 9 -> 15 -> 30

twoSLL = new LinkedList();
twoSLL.add(10);
// 10
twoSLL.add(15);
// 10 -> 15
twoSLL.add(30);
// 10 -> 15 -> 30

console.log(oneSLL.intersectPoint(twoSLL));
// 15

threeSLL = new LinkedList();
threeSLL.add(0);
// 0

fourSLL = new LinkedList();
fourSLL.add(1);
// 1

console.log(threeSLL.intersectPoint(fourSLL));
// 'There is no intersection between the linked lists'
