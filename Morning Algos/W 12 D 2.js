class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLLQueue {

    // When you construct an SLLQueue, it is always empty.
    constructor() {
        this.front = null;
        this.rear = null;
    }

    // Returns the front data of the queue.
    frontData() {
        // Removes the edge case of an empty queue.
        if(this.front == null) {
            return "There is no data in the front";
        } 
        else {
            return "Front: " + this.front.data;
        }
    }

    // Constructs a new node and adds it to the current queue.
    enqueue(data) {
        var newNode = new Node(data);
        // Removes the edge case of an empty queue.
        if(this.front == null) {
            this.front = newNode;
            this.rear = newNode;
        } 
        else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        return `Added ${this.rear.data} to the queue`;
    }

    // Remove and returns the data from the front of the queue.
    dequeue() {
        if (this.front == null) {
            return "There is nothing to remove";
        }
        else {
            const removedNode = this.front;
            this.front = this.front.next;
            if(this.front == null) {
                this.rear = null;
            }
            return `Removed ${removedNode.data} from the queue`;
        }
    }

    // Checks if the queue is empty.
    isEmpty() {
        if (this.front == null) {
            return "This is empty";
        }
        else {
            return "This is not empty";
        }
    }

    // Searches whether the target value exists in the queue.
    contains(target) {
        if(this.front == null) {
            return `${target} does not exist because the queue is empty`;
        }
        while(this.front) {
            if(this.front.data == target) {
                return `${target} exists in the queue`;
            }
            this.front = this.front.next;
        }
        return `${target} does not exist in the queue`;
    }

    printQueue() {
        let result = "";
        result += `Front: ${this.front.data}`;
        var runner = this.front;
        while(runner) {
            runner = runner.next;
        }
        result += ` | Rear: ${this.rear.data}`;
        return result;
    }

}

var q = new SLLQueue();

console.log(q.frontData());
// "There is no data in the front"
console.log(q.dequeue());
// "There is nothing to remove"
console.log(q.isEmpty());
// "This is empty"
console.log(q.contains("a"));
// "a does not exist because the queue is empty"

console.log(q.enqueue("a"));
// "Added a to the queue"
console.log(q.enqueue("b"));
// "Added b to the queue"
console.log(q.enqueue("c"));
// "Added c to the queue"
console.log(q.enqueue("d"));
// "Added d to the queue"
console.log(q.frontData());
// "Front: a"
console.log(q.printQueue());
// "Front: a | Rear: d"

console.log(q.dequeue());
// "Removed a from the queue"
console.log(q.printQueue());
// "Front: b | Rear: d"

console.log(q.contains("b"));
// "b exists in the queue"
console.log(q.contains("a"));
// "a does not exist in the queue"