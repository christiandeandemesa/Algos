class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLLStack {

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

    isSLLEmpty() {
        if (!this.top) {
            return true
        } else {
            return false
        }
    }

    printStack() {
        let tempStack = new SLLStack();
        let temp;
        console.log("Top: " + this.peek());
        while (!this.isSLLEmpty()) {
            temp = this.pop()
            console.log(temp);
            tempStack.push(temp);
        }
        while (!tempStack.isSLLEmpty()) {
            temp = tempStack.pop();
            this.push(temp);
        }
    }

    // Remove the smallest value in the SLLStack.
    minStack() {
        let tempStack = new SLLStack();
        let temp;
        // Number.MAX_VALUE is the biggest possible integer javascript can use.
        let count = Number.MAX_VALUE;
        // While loop to go through the original SLLStack, and create a reverse copy of it.
        while(!this.isSLLEmpty()) {
            temp = this.pop();
            // Changes count.
            if(temp < count) {
                count = temp;
            }
            tempStack.push(temp);
        }
        // While loop to go through the reverse SLLStack copy, and recreate the original SLLStack.
        while(!tempStack.isSLLEmpty()) {
            temp = tempStack.pop();
            if(temp != count) {
                this.push(temp);
            }
        }
        // There is an unresolved edge case where the stack only has this Number.MAX_VALUE is its only value, but will stick work on an empty stack and a stack with only non-number data types.
        if(count = Number.MAX_VALUE) {
            console.log("There are no numbers in the SLLStack");
        }
        else {
            console.log(`You removed ${count} from the SLLStack`);
        }
    }

}

class SLLQueue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    // Creates a method and returns whether the first half of the queue is equal to the sum of the second half.
    sumOfHalvesEqual() {
        let tempQ = new SLLQueue();
        let temp;
        let count = 0;
        // While loop counts how many values are in the original queue, and creates a reverse copy of it.
        while(!this.isEmpty()) {
            temp = this.dequeue();
            tempQ.enqueue(temp);
            count++;
        }
        // Removes the edge case of an odd number of values in the queue.
        if(count % 2 === 1) {
            console.log("Cannot run function because there are an odd number of values in the queue");
        }
        else {
            let size = 0;
            let halfQSize = count / 2;
            let firstHalfCount = 0;
            let secondHalfCount = 0;
            // Increments the firstHalfCount and secondHalfCount, and uses the reverse copy queue to recreate the original queue.
            while(!tempQ.isEmpty()) {
                temp = tempQ.dequeue();
                this.enqueue(temp);
                size++;
                if(size <= halfQSize && parseInt(temp)) {
                    firstHalfCount += temp;
                }
                else if(size > halfQSize && parseInt(temp)) {
                    secondHalfCount += temp;
                }
            }
            if(firstHalfCount === secondHalfCount && count % 2 === 0 && firstHalfCount !== 0 && secondHalfCount !== 0) {
                console.log("Both halves of the queue are equal");
            }
            else if(firstHalfCount !== secondHalfCount && count % 2 === 0) {
                console.log("Both halves of the queue are not equal");
            }
            // There is an unresolved edge case if the queue has an even number of values, and both halves of the queue sum to 0.
            else if(firstHalfCount === 0 && secondHalfCount === 0) {
                console.log("Cannot run function because there are no numbers in the queue")
            }
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

// Checks to see if minStack() works and returns the original stack.
var q = new SLLStack();
q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.printStack();
q.minStack();
q.printStack();

// Checks to see if minStack() works on letter only edge cases.
var q2 = new SLLStack();
q2.push("a");
q2.printStack();
q2.minStack();
q2.printStack();

// Checks to see if sumOfHalvesEqual() works correctly.
var q3 = new SLLQueue();
q3.enqueue(1);
q3.enqueue(4);
q3.enqueue(2);
q3.enqueue(3);
q3.printQueue();
q3.sumOfHalvesEqual();
q3.printQueue();

// Checks to see if sumOfHalvesEqual() works correctly.
var q4 = new SLLQueue();
q4.enqueue(1);
q4.enqueue(2);
q4.enqueue(3);
q4.enqueue(4);
q4.printQueue();
q4.sumOfHalvesEqual();
q4.printQueue();

// Checks to see if sumOfHalvesEqual() works on odd-value edge cases.
var q5 = new SLLQueue();
q5.enqueue(1);
q5.printQueue();
q5.sumOfHalvesEqual();
q5.printQueue();

// Checks to see if sumOfHalvesEqual() works on letter only edge cases.
var q6 = new SLLQueue();
q6.enqueue("a");
q6.enqueue("b");
q6.printQueue();
q6.sumOfHalvesEqual();
q6.printQueue();