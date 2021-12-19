/*
Print the following two lines of output:
On the first line, print Hello, World! (this is provided for you in the editor).
On the second line, print the contents of parameterVariable.
*/

// Declares a function named greeting that takes in an argument called parameterVariable.
function greeting(parameterVariable) {

    // This line prints 'Hello, World!' to the console.
    console.log('Hello, World!');

    // This line prints what you passed in the argument to the console.
    console.log(parameterVariable);
}

// We call a function through its name (greeting), and have the function run by adding parentheses.
greeting('Welcome to 10 Days of JavaScript!');
/*
'Hello, World!'
'Welcome to 10 Days of JavaScript!'
*/

greeting();
/*
'Hello, World!'
undefined
*/

/* 
Note the above says undefined because we did not pass an argument into the parentheses when we called the function (line 25), so there 
was nothing to print to the console (line 14).
*/