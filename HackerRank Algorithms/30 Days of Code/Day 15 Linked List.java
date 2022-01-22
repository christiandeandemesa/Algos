/*
Complete the insert function so that it creates a new Node (pass data as the Node constructor argument) and inserts it at the tail of the 
linked list referenced by the head parameter. Once the new node is added, return the reference to the head node.
*/

public static  Node insert(Node head, int data) {

    // If the SLL (Singly Linked List) is empty, add a node and make it the head.
    if(head == null) return new Node(data);

    // If the SLL has one node (i.e. the head), add a node after it as the tail.
    else if(head.next == null) head.next = new Node(data);
    
    // If the SLL has more than two nodes, add a node after them as the tail.
    else insert(head.next,data);

    // Returns the first node of the SLL.
    return head;
}

public static  Node insert(Node head, int data) {

    // If the SLL (Singly Linked List) is empty, add a node and make it the head.
    if(head == null) return new Node(data);

    // If the SLL has one node (i.e. the head), add a node after it as the tail.
    else if(head.next == null) head.next = new Node(data);
    
    // If the SLL has more than two nodes, add a node after them as the tail.
    else insert(head.next,data);

    // Returns the first node of the SLL.
    return head;
}