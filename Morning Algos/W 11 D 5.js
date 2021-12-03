class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // Return the value of the second to last node in the list.
    secondToLast() {
        let runner = this.head;
        if (!runner) {
            return "Empty List";
        }
        if (!runner.next) {
            return "There is only one value";
        }
        while (runner.next.next) {
            runner = runner.next;
        }
        return runner.val;
    }

    // Remove the node that has the matching given value.
    removeVal(val) {
        let runner = this.head;
        // If the val you want to remove is the head:
        if (runner.val == val) {
            // Remove the edge case of the head being the only node in the list.
            if (runner.next == null) {
                return "There is only one value";
            }
            // Skip the head by changing its value (runner.val = 1) to the the value of the next node (runner.val = runner.next.val = 2).
            runner.val = runner.next.val;
            // Moves all the runners to the one after it.
            runner.next = runner.next.next;
            return this.printList();
        }
        // Moves the runner as long as the node after it is not equal to null, and is not equal to the value.
        while (runner.next && runner.next.val != val) {
            runner = runner.next;
        }
        // Remove the edge case of passing a value not found in the singly linked list.
        if (runner.next == null) {
            return "The given value is not in the singly linked list";
        }
        // Skip the node with the given value by moving past it.
        runner.next = runner.next.next;
        return this.printList();
    }

    // Insert a new node before a node that has the given target value.
    prepend(newVal, targetVal) {
        let runner = this.head;
        let follower;
        // Remove the edge case of an empty list.
        if(!runner) {
            return "Empty List";
        }
        // Find the node you want to insert before.
        while (runner && runner.val != targetVal) {
            follower = runner;
            runner = runner.next;
        }
        // Remove the edge case of the node (i.e. targetVal) not existing in the list.
        if (!runner) {
            return "The node you want to insert before does not exist in the singly linked list";
        }
        // Create a new node and set it in a variable.
        var newNode = new Node(newVal);
        // Adds the new node to the list, and moves all the runners after it.
        follower.next = newNode;
        newNode.next = runner;
        return this.printList();
    }

    // Determine whether this SLL has a loop
    hasLoop() {
        // Creates two runners that start at the same head.
        let firstRunner = this.head;
        let lastRunner = this.head;
        let currLength = 0;
        let prevLength = -1;
        // While the current length is greater than the previous length, and the lastRunner is not equal to null:
        while (currLength > prevLength && lastRunner) {
            // Have the previous length catch up the current length.
            prevLength = currLength;
            // Have the current length equal to the distance between the two runners.
            currLength = this.distance(firstRunner, lastRunner);
            lastRunner = lastRunner.next;
        }
        // Runs if the last node is null.
        if (!lastRunner.next) {
            return "Not a loop";
        }
        // Runs if the nodes loop back on each other.
        else {
            return "Is a loop";
        }
    }

    // This functions returns an integer that is the distance between the first and last runners.
    distance(first, last) {
        let counter = 0;
        while (first != last) {
            first = first.next;
            counter++;
        }
        return counter++;
    }

    printList() {
        let result = "";
        if (!this.head) {
            return "Empty list";
        }
        let runner = this.head;
        while (runner) {
            result += runner.val + " -> ";
            runner = runner.next;
        }
        result += "null";
        return result;
    }

}

var a = new Node(1)
var b = new Node(2)
var c = new Node(3)
a.next = b;
b.next = c;
var list1 = new SLL();
list1.head = a;

// Creates a looping list.
var d = new Node(1)
var e = new Node(2)
var f = new Node(3)
var g = new Node(4)
var h = new Node(5)
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = d;
var list2 = new SLL();
list2.head = d

console.log(list1.printList());
// "1 -> 2 -> 3 -> null"
console.log(list1.secondToLast());
// 2
console.log(list1.removeVal(2));
// "1 -> 3 -> null"
console.log(list1.prepend(2, 3));
// "1 -> 2 -> 3 -> null"
console.log(list1.hasLoop());
// "Not a loop"
console.log(list2.hasLoop());
// "Is a loop"