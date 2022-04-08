// Given a linked list of N nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.

class Node {

    // Added a next argument, and changed this.next = next to create a looping linked list.
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head) {

        // Changed this.head = head to create a looping linked list.
        this.head = head;
    }

    // This is a class method that detects an infinite loop in a linked list.
    detectLoop() {

        /*
        slow starts at the linked list's head's node and represents the movement from one node to another.
        fast starts at the linked list's head's node and represents the movement between every other node.
        flag holds a boolean to determine if the linked list has an infinite loop.
        */
        let slow = this.head;
        let fast = this.head;
        let flag = false;

        // While slow's node, fast's node, and the node after fast's node exist...
        while(slow !== null && fast !== null && fast.next !== null) {

            // slow's node is the node after itself.
            slow = slow.next;

            // fast's node is the node after the node after itself.
            fast = fast.next.next;

            // If slow's node and fast's node are the same, change the flag's boolean and break the while loop.
            if(slow === fast) {
                flag = true;
                break;
            }
        }

        // If the flag's boolean was changed, there is a loop.
        if(flag === true) console.log('Loop detected');

        // Otherwise there is no loop.
        else console.log('Loop not detected');
    }
}

// Creates all the nodes manually.
thirdNode = new Node('C', null);
secondNode = new Node('B', thirdNode);
firstNode = new Node('A', secondNode);
// Then adds thirdNode's next value to create the infinite loop.
thirdNode.next = firstNode;
// Creates a linked list using the linked nodes.
oneSLL = new LinkedList(firstNode);
oneSLL.detectLoop();
// 'Loop detected'

fifthNode = new Node('E', null);
fourthNode = new Node('D', fifthNode);
twoSLL = new LinkedList(fourthNode);
twoSLL.detectLoop();
// 'Loop not detected'