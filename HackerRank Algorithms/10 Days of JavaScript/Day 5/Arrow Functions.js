/*
Complete the function in the editor. It has one parameter: an array, nums. It must iterate through the array performing one of the 
following actions on each element:

If the element is even, multiply the element by 2.
If the element is odd, multiply the element by 3.
The function must then return the modified array.
*/

function modifyArray(nums) {

    /*
    The below can be rewritten as the following:

    let newNum = function(num) {
        if(num % 2 === 0) num * 2;
        else num * 3;
    }

    An arrow function allows us to write a shorter function without a name where the parameter (e.g. num) is given before the arrow (=>),
    and the contents of the function comes after the arrow. Also notice that nested functions do not need a return value.

    The ternary operator is a shorter way to write an if-else statement where the if condition is given before the question mark (num % 2 
    === 0), what should happen if the condition is true before the colon (num * 2), and what should happen if the condition is false after 
    the colon (num * 3).

    The modulus operator (%) will return the remainder between the two numbers, so num % 2 === 0 can be read as if a number divided by 2 
    has a remainder of 0 (i.e. if a number is even).
    */
    let newNum = num => num = (num % 2 === 0) ? num * 2: num * 3;

    // The map() method takes an array before it (nums) and applies the called function (newNum) on every element in the array.
    return newArr = nums.map(newNum);
}

console.log(modifyArray([1, 2, 3, 4]));
// [3, 4, 9, 8]