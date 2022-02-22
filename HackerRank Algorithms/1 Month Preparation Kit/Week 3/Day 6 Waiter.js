/*
You are a waiter at a party. There is a pile of numbered plates. Create an empty answers array. At each iteration, i, remove each plate 
from the top of the stack in order. Determine if the number on the plate is evenly divisible by the i prime number. If it is, stack it in 
pile B subscript i. Otherwise, stack it in stack A subscript i. Store the values in B subscript i from top to bottom in answers. In the 
next iteration, do the same with the values in stack A subscript i. Once the required number of iterations is complete, store the remaining 
values in A subscript i in answers, again from top to bottom. Return the answers array.
*/

function waiter(number, q) {

    // Initializes answers which will the be the final result, A stack, and B stack as empty arrays.
    let answers = [];
    let A = [];
    let B = [];

    // Initialize the nth prime number as 1.
    let currPrime = 1;

    // Initializes denominator as the first prime number, which is 2.
    let denominator = nthPrime(currPrime);

    // For loop through every number in the number array starting with the last element.
    for (let i = number.length - 1; i >= 0; i--) {

        // Removes the last element in the number array, and initializes it in removedNum.
        let removedNum = number.pop();

        // If removedNum divided by 2 has no remainder, add the removedNum as the first element in B.
        if (removedNum % denominator === 0) B.unshift(removedNum);

        // If removedNum divided by 2 has a remainder, add the removedNum as the first element in A.
        else A.unshift(removedNum);
    }

    // Adds the B array as an element in answers.
    answers.push(B);

    // While the nth prime number is less than q...
    while(currPrime < q) {

        // Increment currPrime, and get a new denominator.
        currPrime++;
        denominator = nthPrime(currPrime);

        // For loop through every element in A starting with the last element.
        for(let i = A.length - 1; i >= 0; i--) {

            /*
            If the current element divided by denominator has no remainder, remove that element from A and add it as the last element in 
            answers.
            */
            if(A[i] % denominator === 0) {
                let removedNum = A.splice(i, 1);
                answers.push(removedNum);
            }
        }

        // Reverses the order of A to mimic a stack.
        A.reverse();
    }

    // Adds the element not divisible up to the qth prime number as an element in answers.
    answers.push(A);

    // Flattens the two-dimensional array into a one-dimensional array.
    return answers.flat();
}

// This function takes a number as a paramter (q) and returns the qth prime number.
function nthPrime(q) {

    // Initializes num, which will eventually be a prime number, as 1, and intializes count as 0.
    let num = 1;
    let count = 0;

    // While count is less than the parameter...
    while(count < q) {

        // Increment num.
        num++;

        // For loop through every number from 2 to num.
        for(var i = 2; i <= num; i++) {

            // If num divided by i has a remainder of 0, break this for loop.
            if(num % i === 0) break;
        }

        /*
        If i is equal to num, increment count.
        Notice we only have access to this i if we use var instead of let in the above for loop.
        */
        if(i === num) count ++;
    }
    return num;
}

console.log(waiter([2, 3, 4, 5, 6, 7], 3));
// [2, 4, 6, 3, 5, 7]