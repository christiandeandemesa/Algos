// Lesson 1 - Predict the output
var a = 25;
a = a - 13;
console.log(a / 2);
// 6

a = "hello";
console.log(a + " hello");
// "hello hello"


// Lesson 2 - Predict Loops
for (var i = 0; i < 10; i++) {
    console.log(i);
    i = i + 3;
}
console.log("outside of the loop " + i);
// 0   4   8   "outside of the loop" 12


// Lesson 3 - Predict what the code does
function getTotal(arrayOfNumbers) {
    var sum = arrayOfNumbers[0]; // 1
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
    }
    console.log("the total is: " + sum);
}
getTotal([1, 3, 5]);
// "the current sum is: 2"   "the current sum is: 5"   'the current sum is: 10"   "the total is: 10"