class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

var a = new Node(1)
var b = new Node(2)
var c = new Node(3)
a.next = b;
b.next = c; 

class SLL {
    constructor() {
            this.head = null;
        }
    
    // Return a statement if the list is empty.
    isEmpty(){
        if(!this.head) {
            return "Empty list";
        }
        else {
            return "Not empty list";
        }
    }

    // Create a new node with the given value and inserts it at the back of the list
    insertAtBack(val){
        const new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            return `This list is now ${this.printList()}`;
        }
        else {
            let runner = this.head;
            while(runner.next) {
                runner = runner.next;
            }
            runner.next = new_node;
            return `This list is now ${this.printList()}`;
        }
    }

    // Add all the items of an array to the back of the list
    arrToList(arr){
        for(let i = 0; i < arr.length; i++) {
            this.insertAtBack(arr[i]);
        }
        return `This list is now ${this.printList()}`;
    }

    printList(){
        let result = "";
        if(!this.head){
            return "Empty list";
        }
        var runner = this.head;
        // while(runner != null) is another way to write below.
        while(runner){ 
            result += runner.val + " -> ";
            runner = runner.next;
        }
        result += "null";
        return result;
    }

}

var list1 = new SLL();
list1.head = a;

console.log(list1.printList());
// "1 -> 2 -> 3 -> null"
console.log(list1.isEmpty());
// "Not empty list"
console.log(list1.insertAtBack(4));
// "This list is now 1 -> 2 -> 3 -> 4 -> null"
console.log(list1.arrToList([100, 200 , 300]));
// "This list is now 1 -> 2 -> 3 -> 4 -> 100 -> 200 -> 300 -> null"