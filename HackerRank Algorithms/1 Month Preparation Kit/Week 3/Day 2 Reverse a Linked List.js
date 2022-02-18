/*
Given the pointer to the head node of a linked list, change the next pointers of the nodes so that their order is reversed. The head 
pointer given may be null meaning that the initial list is empty.
*/

function reverse(llist) {    

    // Initializes the head (first node in the linked list) and next (the node after head) as null.
    let head = null;
    let next = null;

    // While the linked list is not equal to null...
    while(llist){ 

        // head is a new singly linked list where it takes data from a linked list given in a parameter.
        head = new SinglyLinkedListNode(llist.data); 

        // The node after head is next's value.
        head.next = next;
        
        // next is head's value.
        next = head;

        // Moves to the next data in the linked list.
        llist = llist.next;
    }

    // Returns the head of the new singly linked list.
    return head;
}