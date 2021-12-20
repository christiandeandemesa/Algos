/*
1. Declare a constant variable, PI, and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a 
constant and named PI (uppercase).

2. Read a number, r, denoting the radius of a circle from stdin.

3. Use PI and r to calculate the area and perimeter of a circle having radius r.

4. Print area as the first line of output and print perimeter as the second line of output.
*/

function main(r) {

    // Math.PI is literally the number pi (i.e. 3.14...).
    const PI = Math.PI;

    // r ** 2 means r to the power of 2, and could be rewritten as Math.pow(r, 2).
    console.log('The area of your circle is: ' + PI * r ** 2);
    console.log('The perimeter of your circle is: ' + 2 * PI * r);

    // try attempts to run the code written inside it.
    try {    
        
        // Because a const is immutable, it should be impossible to change it to a different value.
        PI = 0;
        
        // This will only print if PI had its value changed due to it being a var or let instead of a const.
        console.log(PI);
    } 

    // catch will run its code if the try code fails to run.
    catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

main(2);
/*
The area of your circle is: 12.566370614359172
The perimeter of your circle is: 12.566370614359172
You correctly declared 'PI' as a constant.
*/