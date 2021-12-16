// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// For more information on nodes and singly-linked lists, refer to 876. Middle of the Linked List.
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLL {
    constructor(list) {
        this.head = list;
    }
}

var printList = function(list) {
    if(!list.head.val) {
        console.log('Empty list');
    }
    else {
        let str = ''; 
        let curr = list.head;
        while(curr) {
            str += curr.val + ' -> ';
            curr = curr.next;
        }
        str += 'null';
        console.log(str);
    }
}
var removeNthFromEnd = function(list, n) {
    let runner = list.head;
    let left = runner;
    let right = runner;

    // For loop to get to the node we want to remove (i.e. n).
    for(let i = 0; i < n; i++) {
        right = right.next;
    }

    // If the node next to n is null:
    if(!right) {

        // Give n the value of null to remove it.
        runner.val = null;
    }

    // If the node next to n is not null:
    else{

        // While loop to move both pointers until the node next to right is null.
        while(right.next) {
            left = left.next;
            right = right.next;
        }

        /*
        Skip over n (e.g. take 1 -> 2 -> 3 -> null, left is node 1, and we want to skip node 2. We change left.next 
        (originally node 2 since node 2 is next to node 1) to left.next.next (which is node 3 since node 3 is next to 
        the node next to node 1)).
        */
        left.next = left.next.next;
    }
}

const nodeOne = new Node(1);
const nodeTwo = new Node(2);
const nodeThree = new Node(3);
const nodeFour = new Node(4);
const nodeFive = new Node(5);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;
nodeFour.next = nodeFive;

const SllOne = new SLL(nodeOne);
printList(SllOne);
removeNthFromEnd(SllOne, 2);
printList(SllOne);
// '1 -> 2 -> 3 -> 5 -> null'

const newNodeOne = new Node(1);

const SllTwo = new SLL(newNodeOne);
printList(SllTwo);
removeNthFromEnd(SllTwo, 1);
printList(SllTwo);
// 'Empty list'

const otherNodeOne = new Node(1);
const otherNodeTwo = new Node(2);

otherNodeOne.next = otherNodeTwo;

const SllThree = new SLL(otherNodeOne);
printList(SllThree);
removeNthFromEnd(SllThree, 1);
printList(SllThree);
// '1 -> null'