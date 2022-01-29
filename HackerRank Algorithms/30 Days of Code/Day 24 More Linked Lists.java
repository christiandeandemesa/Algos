/*
A Node class is provided for you in HackerRank. A Node object has an integer data field, data, and a Node instance pointer, next, pointing 
to another node (i.e.: the next node in a list).

A removeDuplicates function is declared in your editor, which takes a pointer to the head node of a linked list as a parameter. Complete 
removeDuplicates so that it deletes any duplicate nodes from the list and returns the head of the updated list.
*/

public static Node removeDuplicates(Node head) {

    // If the linked list does not have a head node (i.e. is empty), return its head (i.e. null).
    if(head == null) return head;

    /*
    Creates a HashSet named set that only takes integers.
    Sets can only contain unique data, so having duplicates is not allowed.
    */
    Set<Integer> set = new HashSet<Integer>();

    // Adds the head's data to the set.
    set.add(head.data);

    // Creates a node called curr that is the same as the node head to make the while loop less confusing.
    Node curr = head;

    // While the node after the current node exists...
    while(curr.next != null) {

        /*
        If the set already has an integer equal to the data of the node after the current node, we change the linked list by having the 
        current node point to the node after the next node.

        As illustrated below, curr.next.next (2) moves to be curr.next, completely removing the original curr.next (1):
        curr: 1 -> curr.next: 1 -> curr.next.next: 2
        curr: 1 -> curr.next: 2
        */
        if(set.contains(curr.next.data)) curr.next = curr.next.next;

        // If the set does not have an integer equal to the data of the node after the current node...
        else {

            // Add the current node's data to the set.
            set.add(curr.next.data);

            /*
            Moves the pointer on the current node so the while loop will eventually break.

            As illustrated below, curr.next (2) is pointed at to become the new curr, and all subsequent nodes also shift:
            curr: 1 -> curr.next: 2 -> curr.next.next: 3
            curr: 2 -> curr.next: 3
            */
            curr = curr.next;
        }
    }
    return head;
}