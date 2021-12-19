/*
Print the following three lines of output:

On the first line, print the sum of firstInteger and the integer representation of secondInteger.
On the second line, print the sum of firstDecimal and the floating-point representation of secondDecimal.
On the third line, print firstString concatenated with secondString. You must print firstString before secondString.
*/

function performOperation(secondInteger, secondDecimal, secondString) {

    // Declares an immutable variable (const) named firstInteger, and initializes it with the integer 4.
    const firstInteger = 4;
    
    // Declares a const named firstDecimal, and initializes it with the floating-point (i.e. decimal) 4.0.
    const firstDecimal = 4.0;
    
    // Declares a const named firstString, and initializes it with the string 'HackerRank '.
    const firstString = 'HackerRank';
    
    // This line prints the sum of the firstInteger's value and the secondInteger's value as one integer to the console.
    // Number() converts the data type in the parentheses to an integer or floating-point respectively.
    console.log(firstInteger + Number(secondInteger));
    
    // This line prints the sum of the firstDecimal's value and the secondDecimal's value as one floating-point to the console.
    console.log(firstDecimal + Number(secondDecimal));
    
    // This line prints the firstString directly followed by the secondString as one string to the console.
    console.log(firstString + secondString);
}

performOperation('1', '0.9', ' is the best place to learn and practice coding!')
/*
5
4.9
HackerRank is the best place to learn and practice coding!
*/

/*
Note if you did not convert firstInteger or firstDecimal to a number, it would print 41 and 40.9 instead because it would add the string
to the end of the number.
Note the above string ' is the best...' has a space in front of it because concatenated strings do not automatically create whitespace.
*/

performOperation('-1', '3.14', 'is the best place to learn and practice coding!')
/*
3
7.140000000000001
HackerRankis the best place to learn and practice coding!
*/

/*
Note you can also use negative integers and floating-points.
Note you can use floating points that are as long as you want.
Note that 4 + 3.14 did not equal 7.14 because of floating-point precision, which is an error that occurs when the computer limits the 
storage of a floating-point to 64 bits.
Note the above string 'is the best...' does not have a space, and see what the result is.
*/