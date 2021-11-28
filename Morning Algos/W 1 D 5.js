// How to swap variables
var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);
// "apples and apples"

var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1;
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);
// "apples and oranges"


// While loops
var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    // "start: 0, end: 12"   "start: 2, end: 10"   "start: 4, end: 8"
    start += 2;
    end -= 2;
}


/*
Reversing an array

Write a function reverse( arr ) to reverse an array, if we were given...
*/
function reverse(arr) {
    var result = []
    for(let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

console.log(reverse(["a", "b", "c", "d", "e"]));
// ["e", "d", "c", "b", "a"]