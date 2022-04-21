/*
Given an array arr[ ] of size N having distinct elements, the task is to find the next greater element for each element of the array in order of their appearance in the 
array.
Next greater element of an element in the array is the nearest element on the right which is greater than the current element.
If there does not exist next greater of current element, then next greater element for current element is -1. For example, next greater of the last element is always -1.
*/

class Stack {
	constructor() {
		this.items = [];
	}

	printStack() {
		console.log(this.items.join(' '));
	}

	push(element) {
		this.items.push(element);
	}

	// This is a class method that returns a string where the number is the closest greater number to the right of the previous number in the array.
	nextLargerElement() {
		// largeElements will hold all the closest greater numbers.
		let largeElements = [];

		// For loop through until the second to last index in the stack's items array...
		for (let i = 0; i < this.items.length - 1; i++) {
			/*
			currI will hold the current i for the for loop since we are changing i in the below while loop.
			left is the number at the current index.
			right is the number at the next index.
			*/
			let currI = i;
			let left = this.items[i++];
			let right = this.items[i];

			// While loop runs until left is less than right, or until right is undefined.
			while (left >= right) {
				// Changes right to be the number at the next index.
				i++;
				right = this.items[i];
			}

			// If the while loop breaks when right is undefined, it means there was no possible number greater than left.
			if (right === undefined) largeElements.push(-1);
			// If the while loop break when right is not undefined, push right since it is the closest number greater than left.
			else largeElements.push(right);

			// Resets i for the for loop.
			i = currI;
		}
		// Because the for loop runs until the second to last element, push -1 because the last number will never have a number greater than it.
		largeElements.push(-1);
		console.log(largeElements.join(' '));
	}
}

const oneStack = new Stack();
oneStack.push(1);
oneStack.push(3);
oneStack.push(2);
oneStack.push(5);
oneStack.printStack();
// '1 3 2 5'
oneStack.nextLargerElement();
// '3 5 5 -1'

const twoStack = new Stack();
twoStack.push(6);
twoStack.push(8);
twoStack.push(0);
twoStack.push(1);
twoStack.push(3);
twoStack.printStack();
// '6 8 0 1 3'
twoStack.nextLargerElement();
// '8 -1 1 3 -1'
