/*
Given two numbers represented by two linked lists of size N and M. The task is to return a sum list.
The sum list is a linked list representation of the addition of two input numbers from the last.
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
	}

	// This is a class method that adds each corresponding node's values in two linked lists, starting with the last nodes.
	addTwoLists(secondSLL) {
		/*
		sumSLL is a linked list that will hold the added node values.
		firstHead is the first linked list starting at its head's node.
		secondHead is the second linked list starting at its head's node.
		firstLength will hold how many nodes the fist linked list has.
		secondLength will hold how many nodes the second linked list has.
		*/
		const sumSLL = new LinkedList();
		let firstHead = this.head;
		let secondHead = secondSLL.head;
		let firstLength = 0;
		let secondLength = 0;

		// While loop goes through each node in the fist linked list to get firstLength.
		while (firstHead !== null) {
			firstLength++;
			firstHead = firstHead.next;
		}

		// Resets firstHead to the first linked list's head node.
		firstHead = this.head;

		// While loop goes through each node in the second linked list to get secondLength.
		while (secondHead !== null) {
			secondLength++;
			secondHead = secondHead.next;
		}

		// Resets secondHead to the second linked list's head node.
		secondHead = secondSLL.head;

		// While loop until firstLength is 0 and secondLength is 0.
		while (firstLength > 0 && secondLength > 0) {
			// If firstLength is equal to secondLength...
			if (firstLength === secondLength) {
				/*
				Use the add class method to add both node's data as a single node to sumSLL.
				Moves firstHead and secondHead to their next nodes.
				Decrements firstLength and secondLength.
				*/
				sumSLL.add(firstHead.data + secondHead.data);
				firstHead = firstHead.next;
				secondHead = secondHead.next;
				firstLength--;
				secondLength--;
				// If firstLength is greater than secondLength only add the firstHead's node to sumSLL, move firstHead to the next node, and decrement firstLength.
			} else if (firstLength > secondLength) {
				sumSLL.add(firstHead.data);
				firstHead = firstHead.next;
				firstLength--;
				// If firstLength is less than secondLength only add the secondHead's node to sumSLL, move secondHead to the next node, and decrement secondLength.
			} else if (firstLength < secondLength) {
				sumSLL.add(secondHead.data);
				secondHead = secondHead.next;
				secondLength--;
			}
		}
		// Run the carryOver class method on sumSLL to fix nodes that have a value in the double digits.
		sumSLL.carryOver();
		return sumSLL;
	}

	/*
    This is a class method that checks if the node's value is a double digit number, and, if so, reduces it to a single digit number by subtracting 10 and increases the 
    previous node's value by 1.
    */
	carryOver() {
		/*
		curr is the linked list starting at its head's node.
		arr will hold all the node data in the linked list in order.
		*/
		let curr = this.head;
		let arr = [];

		// While loop pushes each node's data into the array.
		while (curr !== null) {
			arr.push(curr.data);
			curr = curr.next;
		}

		// While there exists at least one element (num) in the array that is greater than 9...
		while (arr.some(num => num > 9)) {
			// For loop through every index in arr starting with the last index.
			for (let i = arr.length - 1; i >= 0; i--) {
				// If the element at the current index is greater than 9, subtract 10 from it, and add 1 to the element at the index before it.
				if (arr[i] > 9) {
					arr[i] -= 10;
					arr[i - 1] += 1;
				}
			}
		}

		/*
		Resets curr to be the linked list's head's node.
		newHead will hold the head node of the modified linked list.
		*/
		curr = this.head;
		let newHead = null;

		/*
		While curr's node exists, the value of the current node (curr.data) is the first element in arr, arr's first element is then removed (arr.shift()), and curr 
		moves to the next node.
		*/
		while (curr !== null) {
			curr.data = arr[0];
			arr.shift();

			// If newHead is null, newHead is curr which is the linked list's head node.
			if (newHead === null) newHead = curr;
			curr = curr.next;
		}

		// Returns newHead since it is the modified linked list.
		return newHead;
	}
}

const oneSLL = new LinkedList();
oneSLL.add(3);
oneSLL.add(4);
oneSLL.add(5);
oneSLL.printList();
// '3 -> 4 -> 5'

const twoSLL = new LinkedList();
twoSLL.add(5);
twoSLL.add(5);
twoSLL.printList();
// '5 -> 5'

threeSLL = oneSLL.addTwoLists(twoSLL);
threeSLL.printList();
// '4 -> 0 -> 0'
