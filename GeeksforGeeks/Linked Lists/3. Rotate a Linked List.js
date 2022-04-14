/*
Given a singly linked list of size N. The task is to left-shift the linked list by K nodes, where K is a given positive integer smaller than or equal to length of the 
linked list.
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

	// This is a class method that shifts nodes to the left K times.
	rotate(K) {
		// Removes the edge case of K being a non-positive number
		if (K < 1) console.log(`${K} must be a positive number`);
		else {
			/*
            prevHead, prev, and curr starts as the original order of the linked list's nodes.
            prevHead will hold the linked list's nodes that are not rotated to the front.
            prev will hold the linked list's nodes that are rotated to the front.
            curr will hold the current node we are on.
            i is to determine whether or not to run the below while loop's if code block.
            */
			let prevHead = this.head;
			let prev = this.head;
			let curr = this.head;
			let i = 1;

			// While the node after curr's node exists...
			while (curr.next !== null) {
				// If i is equal to the number of rotations (K) plus one.
				if (i === K + 1) {
					// The linked list's head becomes curr.
					this.head = curr;

					// The node after prev's node is null.
					prev.next = null;
				}

				// prev's node becomes curr.
				prev = curr;

				// curr's node becomes the node after itself.
				curr = curr.next;

				// Increments i.
				i++;
			}

			// The node after curr's node is prevHead.
			curr.next = prevHead;

			// Prints the linked list.
			this.printList();

			/*
            To illustrate the above method:
            If the linked list is A -> B -> C -> D and K is 2, then prevHead, prev, and curr is A -> B -> C -> D.
            In the first while loop run, 1 (i) is not equal to 3 (K + 1) so the if code block is skipped, prev is A -> B -> C -> D, curr is B -> C -> D, and i is 2.
            In the second while loop run, 2 is not equal to 3 so the if code block is skipped, prev is B -> C -> D, curr is C -> D, and i is 3.
            In the third while loop run, 3 is equal to 3 so the linked list is C -> D, prev.next is null, prev is C -> D -> null, curr is D, and i is 4.
            The while loop breaks because curr is D, so curr.next is null.
            Then curr is C and curr.next is D -> A -> B.
            So, this is C -> D -> A -> B.
            */
		}
	}
}

oneSLL = new LinkedList();
oneSLL.add('A');
// 'A'
oneSLL.add('B');
// 'A -> B'
oneSLL.add('C');
// 'A -> B -> C'
oneSLL.add('D');
// 'A -> B -> C -> D'
oneSLL.rotate(2);
// 'C -> D -> A -> B'
oneSLL.rotate(0);
// 0 must be a positive number
