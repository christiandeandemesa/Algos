/*
Given a singly linked list of N nodes.
The task is to find the middle of the linked list.
If there are two middle nodes (in case when N is even), print the second middle element.
*/

// A class is a template for creating objects, and this class creates nodes.
class Node {

    // A class's constructor runs when creating a new instance of that class.
    constructor(data) {

        // Sets this Node's data property to what was passed in the constructor.
        this.data = data;

        // Sets this Node's next property to null.
        this.next = null;
    }
}

// This class creates linked lists.
class LinkedList {
    constructor() {

        // Sets this LinkedList's head (i.e. the first node in the linked list) property to null.
        this.head = null;
    }

    // This is a class method, a function exclusive to this class, that prints the linked list into an easier to read format.
    printList() {

        /*
        arr is an empty array.
        curr starts at the linked list's head's node.
        */
        let arr = [];
        let curr = this.head;

        // While the curr's node exists...
        while(curr !== null) {

            // Adds the curr's node's data as an element to the end of the array.
            arr.push(curr.data);

            // curr's node is the node after itself (e.g. If linked list is A -> B, curr is A, then curr = curr.next makes curr become B).
            curr = curr.next;
        }

        // str is every element in the array joined into a string that is separated by ' -> ' (e.g. [A, B].join(' -> ') = 'A -> B').
        const str = arr.join(' -> ');

        // Notice console.log
        console.log(str);
    }

    // This is a class method that adds a node to the end of a linked list.
    add(value) {

        // Creates a Node where its data is the value passed as an argument.
        const newNode = new Node(value);

        // If the linked list is empty, sets its head to be the new node.
        if (this.head === null) this.head = newNode;

        // If the linked list has at least one node...
        else {

            // curr starts at the linked list's head's node.
            let curr = this.head;

            // While the node after the curr's node exists...
            while(curr.next !== null) {

                /*
                Move curr to the next node.
                For example:
                If the linked list is 1 -> 2 -> 3, then this.head = 1 and curr = 1.
                curr = curr.next means curr moves from 1 to 2.
                */
                curr = curr.next;
            }

            // When the while loop breaks curr.next is null, but we replace null with newNode.
            curr.next = newNode;
        }

        // Calls on the printList method for this linked list.
        this.printList();
    }

    // This is a class method that finds the middle node of a linked list.
    getMiddle() {

        // If the linked list has at least one node...
        if(this.head !== null) {

            /*
            slow represents the movement between every node.
            fast represents the movement between every other node.
            */
            let slow = this.head;
            let fast = this.head;

            // While fast's node and the node after fast's node exist...
            while(fast !== null && fast.next !== null) {

                /*
                slow's node is the node after itself.
                fast's node is the node after the node after itself.
                For example:
                If our linked list is 1 -> 2 -> 3 -> 4 -> 5, then slow and fast start at 1.
                In the first run of this while loop, slow moves to 2 and fast moves to 3.
                In the second run of this while loop, slow moves to 3 and fast moves to 5.
                Then the while loop breaks because there is no node after fast's node.
                */
                slow = slow.next;
                fast = fast.next.next;
            } 

            // slow is the middle node, and slow.data is the node's data property.
            console.log(`The middle node of the linked list is ${slow.data}`);
        }

        // If the linked list has no nodes, log this string instead.
        else console.log('The linked list is empty');
    }
}

const oneSLL = new LinkedList();
oneSLL.printList();
// ''
oneSLL.getMiddle();
// 'The linked list is empty'
oneSLL.add('A');
// 'A'
oneSLL.add('B');
// 'A -> B'
oneSLL.add('C');
// 'A -> B -> C'
oneSLL.getMiddle();
// 'The middle node of the linked list is B'
oneSLL.add('D');
// 'A -> B -> C -> D'
oneSLL.getMiddle();
// 'The middle node of the linked list is C'