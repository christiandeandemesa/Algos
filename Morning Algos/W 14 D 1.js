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

    insertAtFront(val) {
        var newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtBack(val) {
        var d = new Node(val);
        var runner = this.head;
        while (runner.next) {
            runner = runner.next
        }
        runner.next = d;
    }

    // Reverses this list in-place without using an extra list. 
    reverse() {

        // runner is the node we are currently at, previous will hold the node before runner, and temp will hold the node before we change it.
        let runner = this.head;
        let previous;
        let temp;
        while (runner) {

            // Saves the node after the current node in temp.
            temp = runner.next;

            // Changes the pointer from the node after the current node to the node before the current node.
            runner.next = previous;

            // The node before the current node becomes the current node.
            previous = runner;

            // The current node becomes the next node.
            runner = temp;
        }

        // Changes the head to the new head of the reversed SLL.
        this.head = previous;
        console.log('---Reversed SLL---');
    }

    // Removes all the nodes with negative values. 
    removeNegatives() {
        let runner = this.head;

        // Removes the edge case of an empty SLL.
        if(!runner) {
            console.log('Empty SLL');
        }

        // Removes the edge case of the head, and any subsequent, consecutive values, being negative numbers.
        while(runner.val < 0) {
            runner = runner.next;
        }

        // Points to the new head if any nodes were removed from the above while loop.
        this.head = runner;

        // While runner is not equal to null:
        while(runner.next) {
            if(runner.next.val < 0) {

                /*
                Changes the next runner to be the value of the runner after it.
                E.g. If the SLL is 1 -> -2 -> 3, the runner is 1, runner.next = -2, and runner.next.next = 3.
                By changing runner.next = runner.next.next, then the SLL will be 1 -> 3.
                */
                runner.next = runner.next.next;
            }
            else {
                runner = runner.next;
            }
        }
        console.log('---Removed negative numbers---');
    }

    printList() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while (runner) { // while(runner != null)
            console.log(runner.val);
            runner = runner.next;
        }
    }

}

var a = new Node(1)
var b = new Node(2)
var c = new Node(3)
var d = new Node(-4)
var e = new Node(-5)
a.next = b;
b.next = c;
c.next = d;
d.next = e;
var list1 = new SLL();
list1.head = a;

// Checks to see if reverse() works.
list1.printList();
list1.reverse();
list1.printList();

// Checks to see if removeNegatives() works.
list1.removeNegatives();
list1.printList();