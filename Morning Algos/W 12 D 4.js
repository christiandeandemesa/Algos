class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {

    constructor() {
        this.top = null;
    }
    
    push(data) {
        let pushed = new Node(data);
        if (this.top === null) {
            this.top = pushed;
        } else {
            pushed.next = this.top;
            this.top = pushed;
        }
    }

    pop() {
        if (this.top === null) return null;
        var removed = this.top;
        this.top = this.top.next;
        removed.next = null;
        return removed.data;
    }

    peek() {
        return this.top.data;
    }

    isEmpty() {
        return this.top === null;
    }

    getLength() {
        return this.length;
    }

    printStack() {
        let tempStack = new slStack();
        let temp;
        console.log("Top: " + this.peek());
        while (!this.isEmpty()) {
            temp = this.pop()
            console.log(temp);
            tempStack.push(temp);
        }
        while (!tempStack.isEmpty()) {
            temp = tempStack.pop();
            this.push(temp);
        }
    }

    // Creates a second stack and copies the values from the first stack into the second stack in the same order. 
    copyStack() {
        let tempStack = new slStack();
        let copyStack = new slStack();
        let temp;

        // Creates a temporary stack of the original stack in the reverse order.
        while(!this.isEmpty()) {
            temp = this.pop();
            tempStack.push(temp);
        }

        // Recreates the original stack and creates a copy stack of the temporary stack in the re-reversed order.
        while(!tempStack.isEmpty()) {
            temp = tempStack.pop();
            this.push(temp);
            copyStack.push(temp);
        }
        console.log('---You copied a stack---');
        copyStack.printStack();
    }
}

class SLLQueue {

    constructor() {
        this.front = null;
        this.rear = null;
    }

    // Compares this queue to another given queue to see if they are equal, but you cannot not use any extra array or objects.
    compareQueue(q2) {
        let isEqual = true;
        let newq1 = new SLLQueue()
        let newq2 = new SLLQueue()

        // While the queue calling the function or q2 is not null, empty the nodes and put them in reverse order in newq1 and newq2.
        while (!this.isEmpty() || !q2.isEmpty()) {
            let temp = this.dequeue();
            let temp2 = q2.dequeue();

            // Used to check if q1 and q2 are the same.
            if (temp != temp2) {
                isEqual = false;
            }
            newq1.enqueue(temp);
            newq2.enqueue(temp2);
        }

        // If q1 is not empty but q2 is empty, they are not the same because of different lengths.
        if (!this.isEmpty() && q2.isEmpty()) {
            isEqual = false;
        }

        // If q1 is empty but q2 is not empty, they are not the same because of different lengths.
        if (this.isEmpty() && !q2.isEmpty()) {
            isEqual = false;
        }

        // While newq1 and newq2 are not null, empty the nodes and put them in the correct order in the original queue and q2.
        while (!newq1.isEmpty() && !newq2.isEmpty()) {
            let temp3 = newq1.dequeue()
            this.enqueue(temp3)
            let temp4 = newq2.dequeue()
            q2.enqueue(temp4)
        }

        // If true, they are equal.
        if (isEqual) {
            console.log("they are equal")
        } 

        // If false, they are not equal.
        else {
            console.log("they are not equal")
        }
    }

    getFront() {
        if (this.front) {
            return this.front.data;
        } else {
            return null;
        }
    }

    enqueue(data) {
        var node = new Node(data);
        if (this.front == null) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
    }

    dequeue() {
        if (!this.front) {
            return null;
        }
        const dequeued = this.front;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        return dequeued.data;
    }

    isEmpty() {
        if (this.front) {
            return false;
        } else {
            return true;
        }
    }

    printQueue() {
        console.log("Front: " + this.getFront());
        let q2 = new SLLQueue();
        while (!this.isEmpty()) {
            let temp = this.dequeue();
            console.log(temp);
            q2.enqueue(temp)
        }
        while (!q2.isEmpty()) {
            this.enqueue(q2.dequeue())
        }
    }

    contains(searchVal) {
        let runner = this.front;

        while (runner) {
            if (runner.searchVal === searchVal) return true;
            runner = runner.next;
        }
        return false;
    }

}

// Checks if copyStack() works.
var stack = new slStack();
stack.push("a");
stack.push("b");
stack.push("a");
stack.printStack();
stack.copyStack();

// Checks if compareQueue() works.
var q = new SLLQueue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("b");
q.enqueue("a");
q.printQueue();

var q2 = new SLLQueue();
q2.enqueue("a");
q2.enqueue("a");
q2.enqueue("a");
q2.printQueue();
q2.compareQueue(q2);
q2.printQueue();