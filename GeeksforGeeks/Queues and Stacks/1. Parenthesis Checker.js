/*
Given an expression string x. Examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
For example, the function should return 'true' for exp = “[()]{}{[()()]()}” and 'false' for exp = “[(])”.
*/

// This class creates stacks.
class Stack {
	constructor() {
		// Sets this Stacks' items (i.e. container) as an empty array.
		this.items = [];
	}

	// This is a class method that prints the stack as a string.
	printStack() {
		// Logs all the elements in the items array joined into a string with a whitespace separting them.
		console.log(this.items.join(' '));
	}

	// This is a class method that adds an element to the end of a stack.
	push(element) {
		// Pushes the element into the stack's items array.
		this.items.push(element);
	}

	// This is a class method that checks if the stack's (), [], and {} can be paired in order.
	isPar() {
		// nonPairs will hold all of the non-paired (), [], and {} in order from the stack's items array.
		let nonPairs = [];

		// For loop through each index in the stack's items array...
		for (let i = 0; i < this.items.length; i++) {
			// If nonPairs' last element is ( and the items' current element is ), remove nonPairs' last element.
			if (nonPairs[nonPairs.length - 1] === '(' && this.items[i] === ')') nonPairs.pop();
			// If nonPairs' last element is [ and the items' current element is ], remove nonPairs' last element.
			else if (nonPairs[nonPairs.length - 1] === '[' && this.items[i] === ']') nonPairs.pop();
			// If nonPairs' last element is { and the items' current element is }, remove nonPairs' last element.
			else if (nonPairs[nonPairs.length - 1] === '{' && this.items[i] === '}') nonPairs.pop();
			// Otherwise add the items' current element to the end of nonPairs.
			else nonPairs.push(this.items[i]);
		}

		// If nonPairs is an empty array, log true because every (), [], and {} was paired.
		if (nonPairs.length === 0) console.log(true);
		// If nonpairs is not an empty array, log false.
		else console.log(false);
	}
}

let oneStack = new Stack();
oneStack.push('[');
oneStack.push('(');
oneStack.push(')');
oneStack.push(']');
oneStack.printStack();
// '[ ( ) ]'
oneStack.isPar();
// true

let twoStack = new Stack();
twoStack.push('[');
twoStack.push('(');
twoStack.push(']');
twoStack.push(')');
twoStack.printStack();
// '[ ( ] )'
twoStack.isPar();
// false
