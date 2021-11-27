/* This code does not execute properly. Try to figure out why.

function multiply(a, b){
    a * b
  }
*/

// Refer to the README.md for explanation on functions.
function multiply(a, b){
    multNum = a * b;
    return multNum;
}

console.log(multiply(3, 3));
// 9

console.log(multiply(0, 3));
// 0

console.log(multiply(-1, 3));
// -3