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

    // Prints all the data in the nodes in the BST in numeric order.
    printInOrder(curr = this.root) {

        // Removes the edge case of an empty BST, and the break case.
        if (!curr) {
            return;
        }

        // Calls the function for all the nodes left of the root.
        this.printInOrder(curr.left);

        // Prints the node, and this is placed here because it will print the root between all of the left and right nodes.
        console.log(curr.data);

        // Calls the function for all the nodes right of the root.
        this.printInOrder(curr.right);
    }

    // Prints all the data in the nodes in the BST with the root first.
    printPreOrder(curr = this.root) {
        if (!curr) {
            return
        }

        // Prints the node, and this is placed here because it will print the root before all of the left and right nodes.
        console.log(curr.data);
        this.printInOrder(curr.left);
        this.printInOrder(curr.right);
    }

    // Prints all the data in the nodes in the BST with the root last.
    printPostOrder(curr = this.root) {
        if (!curr) {
            return
        }
        this.printInOrder(curr.left);
        this.printInOrder(curr.right);

        // Prints the node, and this is place here because it will print the root after all of the left and right nodes.
        console.log(curr.data);
    }

    // Returns an array in the printInOrder order.
    // Adds an argument with a default value (i.e. result) to hold all the node data.
    arrInOrder(curr = this.root, result = []) {
        if (!curr) {
            return;
        }

        // Similar to printInOrder except pushes the data into an array.
        this.arrInOrder(curr.left, result);
        result.push(curr.data);
        this.arrInOrder(curr.right, result);
        return result;
    }

    // Returns an array in the printPreOrder order.
    arrPreOrder(curr = this.root, result = []) {
        if (!curr) {
            return
        }

        // Similar to printPreOrder except pushes the data into an array.
        result.push(curr.data);
        this.arrInOrder(curr.left, result);
        this.arrInOrder(curr.right, result);
        return result;
    }

    // Returns an array in the printPostOrder order.
    arrPostOrder(curr = this.root, result = []) {
        if (!curr) {
            return
        }

        // Similar to printPostOrder except pushes the data into an array.
        this.arrInOrder(curr.left, result);
        this.arrInOrder(curr.right, result);
        result.push(curr.data);
        return result;
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

// Checks if printInOrder() and arrInOrder() works.
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new Node(10);
twoLevelTree.root.left = new Node(5);
twoLevelTree.root.right = new Node(15);
twoLevelTree.root.left.left = new Node(2);
twoLevelTree.root.right.right = new Node(20);
twoLevelTree.print();
twoLevelTree.printInOrder();
console.log(twoLevelTree.arrInOrder());

// Checks if printPreOrder() and arrPreOrder() works.
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new Node(10);
threeLevelTree.root.left = new Node(5);
threeLevelTree.root.right = new Node(15);
threeLevelTree.root.left.left = new Node(2);
threeLevelTree.root.left.right = new Node(8);
threeLevelTree.root.right.left = new Node(12);
threeLevelTree.root.right.right = new Node(20);
threeLevelTree.print();
threeLevelTree.printPreOrder();
console.log(threeLevelTree.arrPreOrder());

// Checks if printPostOrder() and arrPostOrder() works.
let insertTree = new BinarySearchTree()
insertTree.root = new Node(10);
insertTree.root.left = new Node(5);
insertTree.root.right = new Node(15);
insertTree.root.left.left = new Node(2);
insertTree.root.left.right = new Node(8);
insertTree.root.right.left = new Node(12);
insertTree.root.right.right = new Node(20);
insertTree.print();
insertTree.printPostOrder();
console.log(insertTree.arrPostOrder());