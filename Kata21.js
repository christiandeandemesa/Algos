/* There must be a function for each number from 0 ("zero") to 9 ("nine").

There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy.

Each calculation consist of exactly one operation and two numbers.

The most outer function represents the left operand, the most inner function represents the right operand.

Division should be integer division. For example, eight(dividedBy(three())) should return 2, not 2.666666. */

const zero = (operator) => !operator ? 0 : operator(0);
const one = (operator) => !operator ? 1 : operator(1);
const two = (operator) => !operator ? 2 : operator(2);
const three = (operator) => !operator ? 3 : operator(3);
const four = (operator) => !operator ? 4 : operator(4);
const five = (operator) => !operator ? 5 : operator(5);
const six = (operator) => !operator ? 6 : operator(6);
const seven = (operator) => !operator ? 7 : operator(7);
const eight = (operator) => !operator ? 8 : operator(8);
const nine = (operator) => !operator ? 9 : operator(9);

const plus = (innerNum) => (outerNum) => outerNum + innerNum;
const minus = (innerNum) => (outerNum) => outerNum - innerNum;
const times = (innerNum) => (outerNum) => outerNum * innerNum;
const dividedBy = (innerNum) => (outerNum) => Math.floor(outerNum / innerNum);

console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3
console.log(eight(dividedBy(three()))); // 2