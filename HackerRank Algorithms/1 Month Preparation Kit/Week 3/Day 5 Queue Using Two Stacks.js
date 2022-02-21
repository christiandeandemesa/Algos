/*
A queue is an abstract data type that maintains the order in which elements were added to it, allowing the oldest elements to be removed 
from the front and new elements to be added to the rear. This is called a First-In-First-Out (FIFO) data structure because the first 
element added to the queue (i.e., the one that has been waiting the longest) is always the first one to be removed.

A basic queue has the following operations:

Enqueue: add a new element to the end of the queue.
Dequeue: remove the element from the front of the queue and return it.
In this challenge, you must first implement a queue using two stacks. Then process q queries, where each query is one of the following 3 
types:

1: Enqueue element x into the end of the queue.
2: Dequeue the element at the front of the queue.
3: Print the element at the front of the queue.
*/

function processData(input) {

    // Queue class
    class Queue {
        constructor() {
            this.pushStack = [];
            this.popStack = [];
        }     
    
        // Takes an element and adds it as the last element in the pushStack.
        enqueue(element) {
            this.pushStack.push(element);
        }
    
        dequeue() {

            // If popStack has at least one element, remove and return popStack's last element.
            if(this.popStack.length > 0) return this.popStack.pop();

            // While pushStack has at least one element...
            while(this.pushStack.length > 0) {

                // Remove pushStack's last element and make it popStack's last element.
                this.popStack.push(this.pushStack.pop());
            }

            // Remove and return popStack's last element
            return this.popStack.pop();
        }
    
        peek() {

            // If popStack has at least one element, return its last element.
            if(this.popStack.length > 0) return this.popStack[this.popStack.length - 1]

            // If pushStack has at least one element, return its first element.
            else if(this.pushStack.length > 0) return this.pushStack[0];

            // If both popStack and pushStack are empty, return undefined.
            else return undefined;
        }
    }
    
    // Creates an array of the inputs.
    const inputArr = input.split('\n');

    // Creates a new queue.
    const queue = new Queue();

    // For loop through every input.
    for (let i = 1; i < inputArr.length; i++) {

        // If the given input is '3', execute the peek method.
        if (inputArr[i] === '3') console.log(queue.peek());

        // If the given input is '2', execute the dequeue method.
        else if (inputArr[i] === '2') queue.dequeue();
        else {

            // Splits the input by a whitespace.
            const enArr = inputArr[i].split(' ');

            // Execute the queue method.
            queue.enqueue(enArr[1]);
        }
    }
} 