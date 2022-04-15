// Given a singly linked list of size N of integers. The task is to check if the given linked list is palindrome or not.

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

	// This is a class method that checks if a linked list is a palindrome.
	isPalindrome() {
		/*
        curr is the linked list starting at its head's node.
        arr is an array that will hold all the linked list's node's values in order.
        */
		let curr = this.head;
		let arr = [];

		// While curr's node exists, add its value to arr.
		while (curr !== null) {
			arr.push(curr.data);
			curr = curr.next;
		}

		/*
        left represents the left index pointer.
        right represents the right index pointer.
        */
		let left = 0;
		let right = arr.length - 1;

		// While left is less than or equal to right...
		while (left <= right) {
			// If the elements at both indices are not the same, break this while loop.
			if (arr[left] !== arr[right]) break;

			// Increments left and decrements right so the while loop can eventually break.
			left++;
			right--;
		}

		// If the if statement in the above while loop was run, left will still be less than or equal to right so it is not a palindrome.
		if (left <= right) console.log('Not a palindrome');
		// If the above while loop breaks on its condition, left will be greater than right so it is a palindrome.
		else console.log('Is a palindrome');
	}
}

const oneSLL = new LinkedList();
oneSLL.add('A');
// 'A'
oneSLL.add('B');
// 'A -> B'
oneSLL.isPalindrome();
// 'Not a palindrome'
oneSLL.add('A');
// 'A -> B -> A'
oneSLL.isPalindrome();
// 'Is a plaindrome'
