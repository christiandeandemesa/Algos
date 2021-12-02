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

    // Create a new node with the given value and insert it at the front of the list.
    insertAtFront(val) {
        // Converts the val into a node (e.g. Node { val: 1, next: null }) in a variable.
        const new_node = new Node(val)
        // The node after your above variable takes on what the head is.
        new_node.next = this.head;
        // The head of the list becomes the above variable.
        this.head = new_node;
        return `This list is now ${this.printList()}`;
    }

    // Remove the head of the list.
    removeHead() {
        // Removes the edge case of trying to remove something from an empty list.
        if (!this.head) {
            return "Empty list";
        }
        // Makes the head the value of the node after it, thus removing the head from the list.
        else {
            this.head = this.head.next;
            return `This list is now ${this.printList()}`;
        }
    }

    // Find the average of all the nodes inside a list.
    average() {
        let runner = this.head;
        // Sets the value of the head in the variable sum.
        let sum = runner.val;
        // Keeps track of the number of integers in the list.
        let counter = 1;
        // While the node after the current node (i.e. runner) is not equal to null;
        while (runner.next) {
            // Remove edge cases with strings.
            if (isNaN(runner.val)) {
                return "Please input a list with only numbers";
            }
            else {
                // Moves the runner to the following node first.
                runner = runner.next;
                // Increments the sum by the value of the new runner.
                sum += runner.val;
                counter++;
            }
        }
        // Divides the sum of all the integers in the list, and divides it by how many integers there were.
        let avg = sum / counter;
        return avg;
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

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
a.next = b;
b.next = c;
const list1 = new SLL();
list1.head = a;

console.log(list1.printList());
// "1 -> 2 -> 3 -> null"
console.log(list1.insertAtFront(0));
// "This list is now 0 -> 1 -> 2 -> 3 -> null"
console.log(list1.removeHead());
// "This list is now 1 -> 2 -> 3 -> null"
console.log(list1.average());
// 2