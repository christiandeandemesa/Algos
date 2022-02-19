/*
Given the pointer to the head node of a linked list and an integer to insert at a certain position, create a new node with the given 
integer as its data attribute, insert this node at the desired position and return the head node.

A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. The head pointer given may be null 
meaning that the initial list is empty.
*/

function insertNodeAtPosition(llist, data, position) {

    // Assigns the linked list to curr, and initializes a counter to determine the inserted node's position.
    let curr = llist;
    let counter = 0;

    // While the current value in the linked list is not null...
    while(curr !== null) {

        // If counter is equal to the position we want to insert at minus one...
        if(counter === position - 1) {

            // Creates a new node.
            let node = new SinglyLinkedListNode(data);

            // The next node is changed to be the next value.
            node.next = curr.next;

            // The next value is changed to be the new node.
            curr.next = node;

            // Breaks the while loop so we don't have to traverse the rest of the values after insertion.
            break;
        }

        // Moves the current runner, and increment counter.
        curr = curr.next;
        counter++;
    }
    return llist;
}
