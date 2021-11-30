// Construct a Node class.
class Node{
    constructor(val){
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
const nodeOne = new Node(1);
const nodeTwo = new Node(2);
const nodeThree = new Node(3);
nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
console.log(nodeOne);
printNode(nodeOne);

// Create a SingleLinkedList with the above nodes, and (1) is the head.
var sll = new SLL(nodeOne);
console.log(sll);
printList(sll);

// ---------------HELPER FUNCTIONS --------------------
//Print the nodes
function printNode(node){
    var str="";
    var curr = node;
    while(curr){
        str+=curr.val+" -> ";
        curr=curr.next;

    }
    str+="null";
    console.log(str);
}

//Print the SLL 
function printList(list){
    if(!list.head){
        return "Empty list";
    }
    var str="";
    console.log("List head: "+list.head.val);
    var curr = list.head;
    while(curr){
        str+=curr.val+" -> ";
        curr=curr.next;

    }
    str+="null";
    console.log(str);
}