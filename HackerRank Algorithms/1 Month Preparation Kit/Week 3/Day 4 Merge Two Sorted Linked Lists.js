/*
Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.
*/

function mergeLists(head1, head2) {

    // If there are no nodes in head1, return head2.
    if(head1 === null) return head2;

    // If there are no nodes in head2, return head1.
    else if(head2 === null) return head1;

    // Initializes node1 and node2 as the first values in their respective linked lists.
    let node1 = head1;
    let node2 = head2;

    // Initializes leader as the new linked list.
    let leader = new SinglyLinkedListNode(null);

    // While the current node at node1 or node2 is not null...
    while(node1 !== null || node2 !== null) {

        // If the current node in its respective linked list is null, the next node is the rest of the other linked list.
        if(node1 === null) {
            leader.next = node2;
            break;
        }
        else if(node2 === null) {
            leader.next = node1;
            break;
        }

        /*
        If the node in head1 linked list is less than the node in head2 linked list, the next node in leader is head1's node, and moves to 
        the next node in head1 linked list.
        */
        if(node1.data < node2.data) {
            leader.next = node1;
            node1 = node1.next;
        }

        /*
        If the node in head2 linked list is equal to or greater than the node in head2 linked list, the next node in leader is head2's 
        node, and moves to the next node in head2 linked list.
        */
        else {
            leader.next = node2;
            node2 = node2.next;
        }

        // Moves to the next node in leader which is currently null.
        leader = leader.next;
    }

    // Returns leader.
    return leader.next;
}