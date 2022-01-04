/*
The code has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the 
first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective 
expression values.

Complete the function in the editor so that it does the following:

1. Finds the initial values of s1 and s2 by plugging the area and perimeter values into the formula:

s = (P +/- Math.sqrt(P ** 2 - (16 * A)))/4

where A is the rectangle's area and P is its perimeter.

2. Creates an array consisting of s1 and s2 and sorts it in ascending order.

3.Returns the sorted array.
*/

/*
Side note this algorithm on HackerRank is flawed in numerous ways:

The argument passed needs to be ...expressions instead of expressions, but doing so in VS code will have every answer be [NaN, NaN].
The spread operator (...) takes an iterable (e.g. array) and expands it.

const arr1 = [1, 2];
const arr2 = [3, 4];
const newArr = [...arr1, ...arr2]; which would be [1, 2, 3, 4].

The literals argument is never used, but is an example of a template literal. A template literal is string interpolation using backticks
(``), and ${} for variables.

const a = 1;
const b = 2;
const str = `a plus b is ${a + b}`; which would be 'a plus b is 3'.
*/
function sides(literals, expressions) {

    // ES6 allows us to use destructuring assignment syntax (e.g. [A, B] = [10, 20]).
    const [A, P] = expressions;

    // Created a value to hold most of the equation.
    const value = Math.sqrt((P ** 2) - (16 * A));

    // Separated s1 and s2 into the two separates versions of the equation.
    const s1 = (P + value) / 4;
    const s2 = (P - value) / 4;

    // Returned s2 first because it will always be smaller than s1 for non-negative numbers.
    return [s2, s1];
}

console.log(sides(['The area is: ', '.\nThe perimeter is: ', '.'], [140, 48]));
// [10, 14]