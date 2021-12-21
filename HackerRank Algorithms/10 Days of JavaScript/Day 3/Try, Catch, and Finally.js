/*
Complete the reverseString function; it has one parameter, s. You must perform the following actions:

1. Try to reverse string s using the split, reverse, and join methods.
2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
3. Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be 
the original string.
*/

function reverseString(s) {
    try {

        /*
        string.split() splits the string into elements in an array based on the parameters in the parentheses.
        array.reverse() reverses the order of the elements in array.
        array.join() joins the elements in array into a single string.
        Could have also chained the functions together as: s = s.split('').reverse().join('').
        Look at the README.md for more information on string.split() and array.join() parameters.
        */
        s = s.split('');
        s = s.reverse();
        s = s.join('');
    }
    catch(error) {

        /*
        error is the error that will print to the console, and error.message will only print the error's message to the console.
        Note the use of console.log instead of return because return automatically ends the function, and we still want the finally 
        statement to run after the catch statement.
        */
        console.log(error.message);
    }

    // The finally statement will always run regardless if the try or catch statement ran.
    finally {
        console.log(s);
    }
}

reverseString('Hello');
// 'olleH'

reverseString(123);
/*
s.split is not a function
123
*/