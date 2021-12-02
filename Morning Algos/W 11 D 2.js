class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
a.next = b;
b.next = c; 

class SLL {
    constructor() {
            this.head = null;
        }
    
    // Return a statement if the list is empty.
    isEmpty() {
        // If the head (i.e. first number) of the instance is empty:
        if(!this.head) {
            return "Empty list";
        }
        else {
            return "Not empty list";
        }
    }

    // Create a new node with the given value and inserts it at the back of the list.
    insertAtBack(val) {
        // Converts the passed value into a node (e.g. Node { val: 1, next: null }) in a variable.
        const new_node = new Node(val);
        // If the head of the instance is empty, it places the above variable as the head.
        if(!this.head) {
            this.head = new_node;
            return `This list is now ${this.printList()}`;
        }
        // If the head of the instance is not empty:
        else {
            let runner = this.head;
            // While the next node after the current node is not null:
            while(runner.next) {
                // Move the runner (i.e. current node) over to the next node.
                runner = runner.next;
            }
            // When the while loop breaks, the last node (runner.next) becomes the the above variable.
            runner.next = new_node;
            return `This list is now ${this.printList()}`;
        }
    }

    // Add all the items of an array to the back of the list.
    arrToList(arr){
        for(let i = 0; i < arr.length; i++) {
            // Calls the insertAtBack function to add each value from the array to the back of the list.
            this.insertAtBack(arr[i]);
        }
        return `This list is now ${this.printList()}`;
    }

    printList(){
        let result = "";
        if(!this.head){
            return "Empty list";
        }
        let runner = this.head;
        // while(runner != null) is another way to write below.
        while(runner){ 
            result += runner.val + " -> ";
            runner = runner.next;
        }
        result += "null";
        return result;
    }

}

const list1 = new SLL();
list1.head = a;

console.log(list1.printList());
// "1 -> 2 -> 3 -> null"
console.log(list1.isEmpty());
// "Not empty list"
console.log(list1.insertAtBack(4));
// "This list is now 1 -> 2 -> 3 -> 4 -> null"
console.log(list1.arrToList([100, 200 , 300]));
// "This list is now 1 -> 2 -> 3 -> 4 -> 100 -> 200 -> 300 -> null"