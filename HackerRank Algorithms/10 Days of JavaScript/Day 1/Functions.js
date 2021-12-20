// Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e., n factorial).

// This is the second called function.
function factorial(num) {
    let result = 1;

    /*
    This is a for loop that declares and initializes i with the value of the passed argument (let i = num).
    Then says the loop will run until i = 0 (i > 0).
    Then decrements i (i--) each time the contents of the loop (result *= i) run.
    */
    for(let i = num; i > 0; i--) {

        // The below can be rewritten as: result = result * i.
        result *= i;
    }
    return result;
}

// This is the first called function...
function main(n) {

    // that prints to the console another called function.
    console.log(factorial(n));
}

main(4);