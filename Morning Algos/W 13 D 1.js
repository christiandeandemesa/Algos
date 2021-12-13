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

    // Determines if the BST (Binary Search Tree) is empty and returns a boolean.
    isEmpty() {

        // If the root does not exist, since it will be the first value entered in a binary search tree, return it is empty.
        if (this.root == null) {
            console.log("This binary tree is empty");
            return true;
        }

        // Otherwise return that it is not empty.
        console.log("This binary tree is not empty");
        return false;
    }

    // Returns the smallest integer data.
    // If an argument is not included when calling the function, it will take the BTS's root as the argument.
    min(current = this.root) {

        // Removes the edge case of an empty BST.
        if (current.isEmpty()) {
            return false;
        }

        // While loop to move current to the leftmost node in the BST.
        while (current.left) {
            current = current.left;

        }
        return current.data;
    }

    // Returns the smallest integer data using recursion.
    /*
    Creates an optional argument (i.e. current) with a preset value (i.e. this.root) that will be used when the function is called 
    recursively.
    */
    minRecursive(current = this.root) {

        // The base case will trigger when the node to the left of the current node does not exist, then returns the current node's integer.
        if (current.left == null) {
            return current.data;
        }

        // If the base case has not triggered yet, call the function recursively with the node left of the current node.
        return this.minRecursive(current.left);
    }

    // Returns the largest integer data.
    // All of this similar to min() except we are moving to the rightmost node instead of the leftmost node.
    max(current = this.root) {
        if (current.isEmpty()) {
            return false;
        }
        while (current.right != null) {
            current = current.right;
        }
        return current.data;
    }

    // Returns the largest integer data using recursion.
    // All of this similar to minRecursive() except we are moving to the rightmost node instead of the leftmost node.
    maxRecursive(current = this.root) {
        if (current.right == null) {
            return current.data;
        }
        return this.maxRecursive(current.right);
    }

    // Logs this tree horizontally with the root on the left.
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

// Checks to see if isEmpty() works.
const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new Node(10);
oneNodeTree.print();
console.log("________________");
emptyTree.isEmpty();
// This binary tree is empty
oneNodeTree.isEmpty();
// This binary tree is not empty

// Checks to see if min() and max() work.
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new Node(10);
twoLevelTree.root.left = new Node(5);
twoLevelTree.root.right = new Node(15);
twoLevelTree.root.left.left = new Node(2);
twoLevelTree.root.right.right = new Node(20);
twoLevelTree.print();
console.log("________________");
console.log(twoLevelTree.min());
// 2
console.log(twoLevelTree.max());
// 20

// Checks to see if minRecursive() and maxRecursive() work.
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new Node(10);
threeLevelTree.root.left = new Node(5);
threeLevelTree.root.right = new Node(15);
threeLevelTree.root.left.left = new Node(2);
threeLevelTree.root.left.right = new Node(8);
threeLevelTree.root.right.left = new Node(12);
threeLevelTree.root.right.right = new Node(20);
threeLevelTree.print();
console.log("________________");
console.log(threeLevelTree.minRecursive());
// 2
console.log(threeLevelTree.maxRecursive());
// 20