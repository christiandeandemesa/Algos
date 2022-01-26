/*
The height of a binary search tree is the number of edges between the tree's root and its furthest leaf. You are given a pointer, root, 
pointing to the root of a binary search tree. Complete the getHeight function provided in your editor so that it returns the height of the 
binary search tree.
*/

/*
                    A
                  /   \
                 B     C
                / \   / \ 
               D   E F   G 

As illustrated above the root of this binary search tree is A, and it has two subtrees: B being on the left and C being on the right.
In those subtrees, their respective roots are B and C, and they have their respective left and right subtrees: D and E, and F and G.
So, the height of the tree from the topmost root (A) to its furthest leaves (D, E, F, and G) is 3.
*/
public static int getHeight(Node root){

    // This is our breakcase.
    if(root == null) return -1;

    /*
    We call the same function recursively.
    Math.max() takes two arguments and returns the argument that is numerically larger.
    */
    else return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
    /*
    To illustrate the above imagine we are doing getHeight(A).
    getHeight(A) returns Math.max(getHeight(B), getHeight(C)) + 1.
    getHeight(B) returns Math.max(getHeight(D), getHeight(E)) + 1.
    getHeight(D) returns Math.max(getHeight(null), getHeight(null)) + 1.
    getHeight(null) returns -1.
    So, getHeight(D) = Math.max(-1, -1) + 1 = 0.
    getHeight(B) returns Math.max(0, 0) + 1 = 1 because getHeight(D) == getHeight(E).
    getHeight(A) returns Math.max(1, 1) + 1 = 2 because getHeight(B) == getHeight(C).
    */
}