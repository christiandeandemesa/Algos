// Construct a Node class.
// class creates a new class with name Node.
class Node{
    // constructor is a method used to initialize object instances of its class.
    constructor(val){
        // this will refer to the name of the instances.
        this.val = val;
        this.next = null;
    }
}

// Construct an SLL class.
class SLL{
    constructor(list){
        this.head = list;
    }
}

// Create a list of nodes following (1) -> (2) -> (3) -> null
// Creates new instances with the constructor
const nodeOne = new Node(1);
const nodeTwo = new Node(2);
const nodeThree = new Node(3);

// Sets the this.next value to the instances.
nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;

console.log(nodeOne);
// Node { val: 1, next: Node { val: 2, next: { Node { val: 3, next: null } } } }
printNode(nodeOne);
// "1 -> 2 -> 3 -> null"

// Create a SingleLinkedList with the above nodes, and (1) is the head (i.e. the first value of the list).
const sll = new SLL(nodeOne);
console.log(sll);
// SLL { head: Node { val: 1, next: Node { val: 2, next: [Node] } } }
printList(sll);
// "List head: 1"   "1 -> 2 -> 3 -> null"

//Prints the nodes
function printNode(node){
    let str = "";
    let curr = node;
    while(curr) {
        str += curr.val + " -> ";
        curr = curr.next;

    }
    str += "null";
    console.log(str);
}

//Print the SLL 
function printList(list){
    if(!list.head){
        return "Empty list";
    }
    let str = "";
    console.log("List head: " + list.head.val);
    let curr = list.head;
    // While curr is not equal to null
    while(curr) {
        str += curr.val + " -> ";
        curr = curr.next;
    }
    str += "null";
    console.log(str);
}