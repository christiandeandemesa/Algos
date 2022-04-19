/*
You are given a pointer/ reference to the node which is to be deleted from the linked list of N nodes. The task is to delete the node. Pointer/ reference to head node 
is not given. 
Note: No head reference is given to you. It is guaranteed that the node to be deleted is not a tail node in the linked list.
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

	// This is a class method that deletes a specific node without a reference to the head.
	deleteNode(node) {
		/*
		curr is the linked list starting at its head node.
		newHead will hold the modified linked list starting at its head node.
		pos will hold the node we want to delete.
		*/
		let curr = this.head;
		let newHead = null;
		let pos = null;

		// While curr's node exists...
		while (curr !== null) {
			// newHead takes on the linked list starting at its head node.
			if (newHead === null) newHead = curr;

			// If the curr's node's data is the node to be deleted, pos is the linked list starting at that node.
			if (curr.data === node) pos = curr;
			curr = curr.next;
		}

		// Removes the edge case of the node to be deleted not existing in the linked list.
		if (pos === null)
			console.log(`Cannot delete ${node} because it is not a node in the linked list`);
		// Removes the edge case of the node to be deleted being the linked list's last node.
		else if (pos.next === null) console.log('Cannot delete the last node in a linked list');
		// Otherwise, pos's node's data is the data of the node after itself, the node after itself skips to the node after that, and reassigns the linked list's head.
		else {
			pos.data = pos.next.data;
			pos.next = pos.next.next;
			this.head = newHead;
			this.printList();
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
oneSLL.deleteNode('B');
// 'A -> C'
oneSLL.deleteNode('B');
// Cannot delete B because it is not a node in the linked list
oneSLL.deleteNode('C');
// 'Cannot delete the last node in a linked list'
