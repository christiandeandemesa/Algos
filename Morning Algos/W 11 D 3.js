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
        const new_node = new Node(val)
        new_node.next = this.head;
        this.head = new_node;
        return `This list is now ${this.printList()}`;
    }

    // Remove the head of the list.
    removeHead() {
        if (!this.head) {
            return "Empty list";
        }
        else {
            this.head = this.head.next;
            return `This list is now ${this.printList()}`;
        }
    }

    // Find the average of all the nodes inside a list.
    average() {
        let runner = this.head;
        let sum = runner.val;
        let counter = 1;
        while (runner.next) {
            // Remove edge cases with strings.
            if (isNaN(runner.val)) {
                return "Please input a list with only numbers";
            }
            else {
                runner = runner.next;
                sum += runner.val;
                counter++;
            }
        }
        let avg = sum / counter;
        return avg;
    }

    printList() {
        let result = "";
        if (!this.head) {
            return "Empty list";
        }
        var runner = this.head;
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

console.log(list1.printList());
// "1 -> 2 -> 3 -> null"
console.log(list1.insertAtFront(0));
// "This list is now 0 -> 1 -> 2 -> 3 -> null"
console.log(list1.removeHead());
// "This list is now 1 -> 2 -> 3 -> null"
console.log(list1.average());
// 2