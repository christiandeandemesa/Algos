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

    // Compares this queue to another given queue (q2) to see if they are equal, but do not use extra arrays or objects and the queue should return to the original order.
    // WARNING this will not rebuild the queues correctly if they are both different lengths.
    compareQueue(q2) {
        let isEquals = true;
        let newq1 = new SLLQueue();
        let newq2 = new SLLQueue();
        // While loop will stop when either of the queues are empty.
        while (!this.isEmpty() || !q2.isEmpty()) {
            let temp = this.dequeue();
            let temp2 = q2.dequeue();
            // This will run if two values are not the same, or if one value is compared against null (i.e. a longer list vs a shorter list).
            if (temp != temp2) {
                isEquals = false;
            }
            newq1.enqueue(temp);
            newq2.enqueue(temp2);
        }
        // If q1 is not empty, but q2 is empty:
        if (!this.isEmpty() && q2.isEmpty()) {
            isEquals = false;
        }
        // If q1 is empty, but q2 is not empty:
        if (this.isEmpty() && !q2.isEmpty()) {
            isEquals = false;
        }
        // While loop will stop when both queues are empty.
        // This recreates the two queues that were run through.
        while (!newq1.isEmpty() && !newq2.isEmpty()) {
            if(!newq1.isEmpty()) {
                let temp3 = newq1.dequeue();
                this.enqueue(temp3);
            }
            if(!newq2.isEmpty()) {
                let temp4 = newq2.dequeue();
                q2.enqueue(temp4);
            }
        }
        if(isEquals) {
            return "They are the same";
        }
        else {
            return "They are not the same";
        }
    }

    //Determine if the queue is a palindrome (read the same forwards and backwards), and use only 1 stack as additional storage without arrays or objects.
    // WARNING this function returns the reverse order of the given queue.
    isPalindrome() {
        let isPalin = true;
        // Removes the edge case of an empty list.
        if(this.front == null) {
            isPalin = false;
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
                isPalin = false;
            }
            this.enqueue(element);
            runner = runner.next;
        }
        if(isPalin) {
            return "This is a palindrome";
        }
        else {
            return "This is not a palindrome";
        }
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
        // Removed the return statement to avoid filling up the terminal.
    }

    dequeue() {
        if (this.front == null) {
            // Changed return to avoid stack overflow.
            return null;
        }
        else {
            const removedNode = this.front;
            this.front = this.front.next;
            if(this.front == null) {
                this.rear = null;
            }
            return removedNode.data;
        }
    }

    // Changed isEmpty() to return a boolean.
    isEmpty() {
        if (this.front) {
            return false;
        }
        else {
            return true;
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
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");
console.log(q.printQueue());
// "Front: a | Rear: d"

var q2 = new SLLQueue();
q2.enqueue("a");
q2.enqueue("b");
q2.enqueue("c");
q2.enqueue("d");
console.log(q2.printQueue());
// "Front: a | Rear: d"

var q3 = new SLLQueue();
q3.enqueue("a");
q3.enqueue("b");
q3.enqueue("b");
q3.enqueue("a");
console.log(q3.printQueue());
// "Front: a | Rear: a"

console.log(q.compareQueue(q2));
// "They are the same"
console.log(q.compareQueue(q3));
// "They are not the same"

console.log(q.isPalindrome());
// "This is not a palindrome"
console.log(q3.isPalindrome());
// "This is a palindrome"