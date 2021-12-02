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

    // Look for the given value in the list.
    contains(val) {
        let runner = this.head;
        while(runner) {
            // If the value of the current node (i.e. runner) is equal to the given value:
            if(runner.val == val) {
                return true;
            }
            // Moves the runner.
            runner = runner.next;
        }
        // Will return this after the while loop breaks.
        return false;
    }

    // Look for how many times the given value in the list appears.
    containsRecursive(val) {
        let runner = this.head;
        let count = 0;
        while(runner) {
            // Similar to contains(), but instead increments count;
            if(runner.val == val) {
                count++;
            }
            runner = runner.next;
        }
        return count;
    }

    // Remove the last node in the list.
    removeBack() {
        let runner = this.head;
        // Removes the edge case of an empty list.
        if(!runner) {
            return "Empty List";
        }
        // Removes the edge case of a list with one node.
        if(!runner.next) {
            return "List has only one item";
        }
        // While the the node after the node after the current runner is not null.
        while(runner.next.next) {
            // Moves the runner.
            runner = runner.next;
        }
        // The last node (runner.next) in the list is removed by setting it to null.
        runner.next = null; 
        return this.printList();
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

console.log(list1.printList());
// "1 -> 2 -> 3 -> null"
console.log(list1.contains(1));
// true
console.log(list1.contains(4));
// false
console.log(list1.containsRecursive(1));
// 1
console.log(list1.removeBack());
// "1 -> 2 -> null"
console.log(list1.removeBack());
// "1 -> null"
console.log(list1.removeBack());
// "List has only one item"