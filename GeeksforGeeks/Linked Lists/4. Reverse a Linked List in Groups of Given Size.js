/*
Given a linked list of size N. The task is to reverse every K nodes (where K is an input to the function) in the linked list. If the number of nodes is not a multiple of 
K, then left-out nodes, in the end, should be considered as a group and must be reversed.
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

	// This is a class method that reverses K-size groups of nodes.
	reverse(K) {
		/*
        curr is the linked list's head's node.
        newHead will hold the first node of the rearranged linked list.
        tail will hold the last node of the rearranged linked list.
        */
		let curr = this.head;
		let newHead = null;
		let tail = null;

		// While curr's node exists...
		while (curr !== null) {
			/*
            count is used to rotate the K-size group of nodes in the nested while loop.
            join holds the non-rotated nodes.
            prev will hold the rotated K-size groups of nodes.
            */
			let count = K;
			let join = curr;
			let prev = null;

			// While curr's node exists and count is greater than 0...
			while (curr !== null && count !== 0) {
				/*
                temp is the node after curr's node.
                The node after curr's node is prev's node.
                prev's node is curr's node.
                curr's node is temp's node.
                Decrements count.
                */
				let temp = curr.next;
				curr.next = prev;
				prev = curr;
				curr = temp;
				count--;
			}

			// If newHead's node does not exist, newHead is prev's node.
			if (newHead === null) newHead = prev;

			// If tail's node exists, the node after tail's node is prev's node.
			if (tail !== null) tail.next = prev;

			// tail is join's node.
			tail = join;
		}

		// The linked list's head is newHead's node.
		this.head = newHead;
		this.printList();

		/*
        To illustrate the above method:
        If the linked list is A -> B -> C -> D and K is 2, then curr is A -> B -> C -> D, and newHead and tail are null.
        In the first top-level while loop run, count is 2, join is A -> B -> C -> D, and prev is null.
        In the first nested while loop run, temp is B -> C -> D, curr.next is null, prev is A, curr is B -> C -> D, and count is 1.
        In the second nested while loop run, temp is C -> D, curr.next is A, prev is B -> A, curr is C -> D, and count is 0.    
        After the nested while loop breaks, newHead is null so newHead becomes B -> A, tail is null and skips the if code block, then tail is A.
        In the second nested while loop run, temp is D, curr.next is null, prev is C, curr is D, and count is 1.
        In the second nested while loop run, temp is null, curr.next is C, prev is D -> C, curr is null, and count is 0.
        After the nested while loop breaks again, newHead is not null and skips the if code block, tail is null so tail.next becomes A -> D -> C, and tail is C.
        After the top-level while loop breaks, the linked list's head is B -> A -> D -> C.
        */
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
oneSLL.reverse(2);
// 'B -> A -> D -> C'
oneSLL.reverse(3);
// 'D -> A -> B -> C'
