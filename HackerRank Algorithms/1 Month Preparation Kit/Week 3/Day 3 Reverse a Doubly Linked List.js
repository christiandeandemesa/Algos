/*
Given the pointer to the head node of a doubly linked list, reverse the order of the nodes in place. That is, change the next and prev 
pointers of the nodes so that the direction of the list is reversed. Return a reference to the head node of the reversed list.
*/

function reverse(llist) {

    // Assigns the doubly linked list to the curr variable.
    let curr = llist;

    // While curr is not equal to null...
    while(curr !== null) {

        // Switches the previous and next values.
        let temp = curr.next;
        curr.next = curr.prev;
        curr.prev = temp;

        // If temp was not null, curr moves to be the next value.
        if(temp !== null) curr = temp;

        // If temp was null, we are at the end of the doubly linked list and all the values were reversed.
        else return curr;
    }
}