class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    isEmpty() {
        if (this.root === null) {
            return true;
        }
        return false;
    }

    // Constructs a new node and inserts into the BST.
    insert(newVal) {
        var newNode = new Node(newVal);
        let curr = this.root;

        // Removes the edge case of an empty BST.
        if (!curr) {
            curr = newNode;
            return this;
        }

        // While the current node is not equal to null:
        while (curr) {

            // Removes the edge case of inserting node with a value that already exists in the BST.
            if (curr.data === newVal) {
                return 'This value already exists in the BST';
            }

            // If the value is less than the current node:
            else if(curr.data > newVal) {

                // If the node to the left of the current node is equal to null:
                if(!curr.left) {

                    // That empty node is the new node with the value.
                    curr.left = newNode;
                    return this;
                }

                // Otherwise keep moving left until you find a node equal to null.
                curr = curr.left;
            }

            // This is similar to the above, except moving right instead of left.
            else {
                if(!curr.right) {
                    curr.right = newNode;
                    return this;
                }
                curr = curr.right;
            }
        }
    }
    
    // Constructs a new node and inserts into a BST using recursion.
    insertRecursive(newVal, curr = this.root) {
        let newNode = new Node(newVal);

        // Removes the edge case of an empty BST, and is the base case to break our recursive function.
        if(!curr) {
            curr = newNode;
            return this;
        }

        // Removes the edge case of inserting node with a value that already exists in the BST.
        if (curr.data === newVal) {
            return 'This value already exists in the BST';
        }

        // If the value is less than the current node:
        if(curr.data > newVal) {

            // If the node to the left of the current node is equal to null:
            if(!curr.left) {

                // That empty node is the new node with the value.
                curr.left = newNode;
            }

            // Otherwise call the function again with the node to the left.
            else {
                return this.insertRecursive(newVal, curr.left);
            }
        }

        // This is similar to the above, except calling the function again with the node to the right.
        else {
            if(!curr.right) {
                curr.right = newNode;
            }
            else {
                return this.insertRecursive(newVal, curr.right);
            }
        }
    }

    // Counts the number of nodes in a BST.
    size(curr = this.root) {

        // Removes the edge case of an empty BST, and is the base case to break our recursive function.
        if(!curr) {
            return 0;
        }

        /*
        Returns 1 for the root, a recursive function that counts all the nodes to the left of another node, and a recursive function that 
        counts all the nodes to the right of another node.
        */
        return 1 + this.size(curr.left) + this.size(curr.right);
    }

    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }
        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);
        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );
        this.print(node.left, spaceCnt);
    }
}

// Checks to see if .size() works.
const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new Node(10);
console.log(oneNodeTree.size());

// Checks to see if .insert() works.
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new Node(10);
twoLevelTree.root.left = new Node(5);
twoLevelTree.root.right = new Node(15);
twoLevelTree.root.left.left = new Node(2);
twoLevelTree.root.right.right = new Node(20);
twoLevelTree.print();
twoLevelTree.insert(13);
twoLevelTree.print();

// Checks to see if .insertRecursive() works.
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new Node(10);
threeLevelTree.root.left = new Node(5);
threeLevelTree.root.right = new Node(15);
threeLevelTree.root.left.left = new Node(2);
threeLevelTree.root.left.right = new Node(8);
threeLevelTree.root.right.left = new Node(12);
threeLevelTree.root.right.right = new Node(20);
threeLevelTree.print();
threeLevelTree.insertRecursive(13);
threeLevelTree.print();

// Checks to see if .size() works on an empty BST.
let insertTree = new BinarySearchTree()
insertTree.print();
console.log(insertTree.size());