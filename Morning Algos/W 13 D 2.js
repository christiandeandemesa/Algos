/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class Node {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
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

    // Determines if the BST contains the given searchVal.
    contains(searchVal) {

        // Creates a variable to hold this.root, so the BST is not deleted at the end.
        let current = this.root;

        // Removes the edge case of an empty BST.
        if (!current) {
            return false;
        }

        // While current is not null:
        while (current) {

            // If the data of current is the value you are looking for, return true.
            if (current.data === searchVal) {
                return true;
            }

            // If the data of current is less than the value you are looking for, move the root to the right.
            else if (current.data < searchVal) {
                current = current.right;
            }

            // If the data of current is greater than the value you are looking for, move the
            else {
                current = current.left;
            }
        }
        return false;
    }

    // Determines if the tree contains the given searchVal using recursion.
    containsRecursive(searchVal, current = this.root) {

        // Removes the edge case of an empty BST, and base case for if the searchVal does not exist in the BST.
        if (!current) {
            return false;
        }

        // Base case to for if the searchVal does exist in the BST.
        if (current.value === searchVal) {
            return true;
        }

        // If the data of current is greater than the value you are looking for, call the function again with the root to the left.
        else if (current.value > searchVal) {
            return this.containsRecursive(searchVal, current.left);
        }

        // If the data of current is less than the value you are looking for, call the function again with the root to the right.
        else {
            return this.containsRecursive(searchVal, current.right);
        }
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

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new Node(10);
console.log(oneNodeTree.contains(10));
console.log(oneNodeTree.contains(5));

const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new Node(10);
twoLevelTree.root.left = new Node(5);
twoLevelTree.root.right = new Node(15);
twoLevelTree.root.left.left = new Node(2);
twoLevelTree.root.right.right = new Node(20);
twoLevelTree.print();
console.log(twoLevelTree.contains(20));
console.log(twoLevelTree.containsRecursive(3));