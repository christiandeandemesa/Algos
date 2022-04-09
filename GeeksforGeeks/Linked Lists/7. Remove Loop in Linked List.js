/*
Given a linked list of N nodes such that it may contain a loop.
Remove the loop from the linked list, if it is present.
*/

class Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor(head) {
		this.head = head;
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

	removeLoop() {
		let slow = this.head;
		let fast = this.head;
		let flag = false;
		while (slow !== null && fast !== null && fast.next !== null) {
			slow = slow.next;
			fast = fast.next.next;
			if (slow === fast) {
				flag = true;
				break;
			}
		}

		// Everything above this if statement is the same as detectLoop in 6. Detect Loop in Linked List.js.
		if (flag === true) {
			// Resets slow to be the linked list's head's node.
			slow = this.head;

			// If the infinite loop does not loop back to head (e.g. twoSLL)...
			if (slow !== fast) {
				// While loop moves slow and fast's nodes by 1 until they are not the same.
				while (slow.next !== fast.next) {
					slow = slow.next;
					fast = fast.next;
				}
			}

			// If the infinite loop does loop back to the head (e.g. oneSLL)...
			else {
				// While loop moves fast's node by 1 until slow's node and the node after fast's node are not the same.
				while (slow !== fast.next) {
					fast = fast.next;
				}
			}

			// The node after fast's node is now null instead of looping back to another node.
			fast.next = null;

			// Uses the printList method to print the now non-looping linked list.
			this.printList();
		}

		// If flag is false, log this string instead.
		else console.log('Loop not detected');
	}
}

thirdNode = new Node('C', null);
secondNode = new Node('B', thirdNode);
firstNode = new Node('A', secondNode);
thirdNode.next = firstNode;
oneSLL = new LinkedList(firstNode);
oneSLL.removeLoop();
// 'A -> B -> C'

sixthNode = new Node('F', null);
fifthNode = new Node('E', sixthNode);
fourthNode = new Node('D', fifthNode);
sixthNode.next = fifthNode;
twoSLL = new LinkedList(fourthNode);
twoSLL.removeLoop();
// 'D -> E -> F'

seventhNode = new Node('G', null);
threeSLL = new LinkedList(seventhNode);
threeSLL.removeLoop();
// 'Loop not detected'
