/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
*/

// Included to create a node.
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Included to create a singly-linked list (SLL).
class SLL {
    constructor(list) {
        this.head = list;
    }
}

// Included to show the nodes in an SLL.
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

var middleNode = function(list) {
    let result = [];

    // runner is the head (i.e. first node) of the SLL.
    let runner = list.head;

    // left is the value of the head (e.g. 1).
    let left = runner.val;

    // Removes the edge case of an empty SLL.
    if(!runner) {
        console.log("Empty list");
    }

    // Removes the edge case of an SLL with only a head (i.e. one node).
    else if(!runner.next) {
        console.log(left);
    }

    // This will run if the SLL has at least two nodes.
    else {

        // While the next node is not equal to null:
        while(runner.next) {

            // Move from the current node to the next node.
            runner = runner.next;
        }

        // right is the value of the last node in the SLL.
        let right = runner.val;
        while(left <= right) {
            result.unshift(right);

            // Moves the left node to the next node.
            left++;

            // Moves the right node to the previous node.
            right--;
        }
    }
    console.log(result);
}

// Creates nodes and saves them in a variable.
const nodeOne = new Node(1);
const nodeTwo = new Node(2);
const nodeThree = new Node(3);
const nodeFour = new Node(4);
const nodeFive = new Node(5);

// Connects the nodes.
nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;
nodeFour.next = nodeFive;

// Creates an SLL and saves it in a variable.
const SllOne = new SLL(nodeOne);
printList(SllOne);
middleNode(SllOne);
// [3, 4, 5]

const otherNodeOne = new Node(1);
const otherNodeTwo = new Node(2);
const otherNodeThree = new Node(3);
const otherNodeFour = new Node(4);
const otherNodeFive = new Node(5);
const otherNodeSix = new Node(6);

otherNodeOne.next = otherNodeTwo;
otherNodeTwo.next = otherNodeThree;
otherNodeThree.next = otherNodeFour;
otherNodeFour.next = otherNodeFive;
otherNodeFive.next = otherNodeSix;

const SllTwo = new SLL(otherNodeOne);
printList(SllTwo);
middleNode(SllTwo);
// [4, 5, 6]