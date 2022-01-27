/*
A level-order traversal, also known as a breadth-first search, visits each level of a tree's nodes from left to right, top to bottom. You 
are given a pointer, root, pointing to the root of a binary search tree. Complete the levelOrder function provided  so that it prints the 
level-order traversal of the binary search tree (BST).
*/

static void levelOrder(Node root){

    // Creates a new linked list named treeQ that only takes data that are nodes.
    LinkedList<Node> treeQ = new LinkedList();

    // Adds the root as the head of the linked list.
    treeQ.add(root);

    // .peek() returns the head of the linked list, so this while loop will run as long as a head exists.
    while(treeQ.peek() != null) {

        // .remove() removes the head of a linked list.
        Node leaf = treeQ.remove();
        System.out.print(leaf.data);

        // If the leaf to the left of the root exists, add it to the linked list.
        if(leaf.left != null) {
            treeQ.add(leaf.left);
        }

        /*
        If the leaf to the right of the root exists, add it to the linked list.
        Notice HackerRank wants the order to be left to right across each level of the BST.
        */
        if(leaf.right != null) {
            treeQ.add(leaf.right);
        }

        // If a head exists, print a space between the integers we are printing.
        if(treeQ.peek() != null) {
            System.out.print(" ");
        }
    }
}