class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Checks if the DLL (doubly-linked list) is empty.
    isEmpty() {
        if(!this.head && !this.tail) console.log('---The DLL is empty---');
        else console.log('---The DLL is not empty---');
    }

    toArray() {
        const vals = [];
        let runner = this.head;
        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        console.log(vals);
    }

    // Inserts a node at the front of the DLL.
    insertAtFront(data) {
        const newNode = new Node(data);

        // Removes the edge case of an empty DLL.
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {

            // The node after the new head is the old head.
            newNode.next = this.head;

            // The current node is the new head.
            this.head = newNode;
        }
        console.log('---Inserted a node at the head---');
    }

    // Inserts a node at the back of the DLL.
    insertAtBack(data) {
        const newNode = new Node(data);

        // Removes the edge case of an empty DLL.
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {

            // The node after the current tail is the new node.
            this.tail.next = newNode;

            // The node before the new node is the current tail.
            newNode.prev = this.tail;

            // The current tail is the new node.
            this.tail = newNode;
        }
        console.log('---Inserted a node at the tail---');
    }

}

const emptyList = new DoublyLinkedList();

// Checks if isEmpty() and insertAtFront() work.
emptyList.isEmpty();
emptyList.insertAtFront(3);
emptyList.toArray();
emptyList.insertAtFront(2);
emptyList.toArray();
emptyList.insertAtFront(1);
emptyList.toArray();
emptyList.isEmpty();

// Checks if insertAtBack() works.
emptyList.insertAtBack(4);
emptyList.toArray();
emptyList.insertAtBack(5);
emptyList.toArray();