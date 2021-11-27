// Create some code that will count all of the positive integers in the numbers array.

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
        countPositives += 1;
    }
}
    
console.log("there are " + countPositives + " positive values");
// "there are 4 positive values"