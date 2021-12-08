class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLLQueue {

    constructor() {
        this.front = null;
        this.rear = null;

    }

    // Compares this queue to another given queue to see if they are equal, but do not use extra arrays or objects and the queue should return to the original order.
    compareQueue(queue) {
        // Removes the edge case of an empty list.
        if(this.front == null | queue.front == null) {
            return "At least one of the given lists are empty";
        }
        // Compares each data between both queues.
        while(this.front) {
            if(this.front.data != queue.front.data) {
                return "They are not equal";
            }
            this.front = this.front.next;
            queue.front = queue.front.next;
        }
        return "They are equal";
    }

    //Determine if the queue is a palindrome (read the same forwards and backwards), and use only 1 stack as additional storage without arrays or objects.
    isPalindrome() {
        // Removes the edge case of an empty list.
        if(this.front == null) {
            return "This list is empty";
        }
        // Sets runner equal to this.front because the first while loop will turn this.front into null.
        let runner = this.front;
        let stack = [];
        while(this.front) {
            // Adds the data to the stack.
            stack.push(this.front.data);
            this.front = this.front.next;
        }
        while(runner) {
            let element = stack.pop();
            // Compares the front of the list (runner.data) to the back of the stack (element).
            if(runner.data != element) {
                return "This is not a palindrome.";
            }
            runner = runner.next;
        }
        return "This is a palindrome.";
    }


    frontData() {
        if(this.front == null) {
            return "There is no data in the front";
        } 
        else {
            return "Front: " + this.front.data;
        }
    }

    enqueue(data) {
        var newNode = new Node(data);
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

    isEmpty() {
        if (this.front == null) {
            return "This is empty";
        }
        else {
            return "This is not empty";
        }
    }

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
console.log(q.enqueue("a"));
console.log(q.enqueue("b"));
console.log(q.enqueue("c"));
console.log(q.enqueue("d"));
console.log(q.printQueue());

var q2 = new SLLQueue();
console.log(q2.enqueue("a"));
console.log(q2.enqueue("b"));
console.log(q2.enqueue("c"));
console.log(q2.enqueue("d"));
console.log(q2.printQueue());

var q3 = new SLLQueue();
console.log(q3.enqueue("a"));
console.log(q3.enqueue("b"));
console.log(q3.enqueue("c"));
console.log(q3.enqueue("b"));
console.log(q3.enqueue("a"));
console.log(q3.printQueue());

var q4 = new SLLQueue();
console.log(q4.enqueue("a"));
console.log(q4.enqueue("b"));
console.log(q4.enqueue("c"));
console.log(q4.enqueue("d"));
console.log(q4.printQueue());

var q5 = new SLLQueue();
console.log(q5.enqueue("a"));
console.log(q5.enqueue("b"));
console.log(q5.enqueue("c"));
console.log(q5.enqueue("d"));
console.log(q5.printQueue());

var q6 = new SLLQueue();
console.log(q6.enqueue("a"));
console.log(q6.enqueue("b"));
console.log(q6.enqueue("c"));
console.log(q6.enqueue("b"));
console.log(q6.enqueue("a"));
console.log(q6.printQueue());

console.log(q.compareQueue(q2));
// "They are equal"
console.log(q4.compareQueue(q3));
// "They are not equal"

console.log(q5.isPalindrome());
// "This is not a palindrome"
console.log(q6.isPalindrome());
// "This is a palindrome"