class Stack{
    constructor(){
        this.items = [];
        this.capacity = 5;
    }

    // Add an item to a stack.
    push(item){
        this.items.push(item);
    }

    // Remove an item from the stack and return the removed item.
    pop(){
        const removedItem = this.items.pop();
        return "The number you removed is: " + removedItem;
    }

    // Return the first item in the stack.
    peek(){
        return "The last number is: " + this.items[this.items.length - 1];
    }

    // Returns the size of the stack.
    size(){
        return "The size is: " + this.items.length;
    }

    // Checks to see if the stack is empty.
    isEmpty(){
        if(this.items.length === 0) {
            return "This stack is empty";
        }
        else {
            return "This stack is not empty";
        }
    }

    // Checks to see if the stack has capacity.
    isFull(){
        if(this.items.length === this.capacity) {
            return "This stack is full";
        }
        else {
            return "This stack is not full";
        }
    }
    
    // Prints the stack.
    printStack(){
        console.log("TOP");
        for(var i=this.items.length-1; i >= 0; i--){
            console.log(this.items[i])
        }
    }

}

var stack1 = new Stack()
var stack2 = new Stack()
var stack3 = new Stack()

stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(5);
stack1.printStack();
// "TOP"   5   4   3   2   1

stack2.push(1);
stack2.push(2);
stack2.push(3);
stack2.push(4);
stack2.push(5);
stack2.printStack();
// "TOP"   5   4   3   2   1

stack3.printStack();
// "TOP"

console.log(stack1.pop());
// "The number you removed is: 5"
stack1.printStack();
// "TOP"   4   3   2   1

console.log(stack1.peek());
// "The last number is: 4"

console.log(stack1.size());
// "The size is: 4"

console.log(stack1.isEmpty());
// "This stack is not empty"
console.log(stack3.isEmpty());
// "This stack is empty"

console.log(stack1.isFull());
// "This stack is not full"
console.log(stack2.isFull());
// "This stack is full"