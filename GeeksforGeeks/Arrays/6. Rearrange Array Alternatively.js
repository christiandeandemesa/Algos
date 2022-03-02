/*
Given a sorted array of positive integers. Your task is to rearrange the array elements alternatively i.e first element should be max value, second should be min value, 
third should be second max, fourth should be second min and so on.
*/

function rearrange(arr) {

    /*
    result will be the array we want to return.
    left will point at the first index in arr.
    right will point at the last index in arr.
    */
    let result = [];
    let left = 0;
    let right = arr.length - 1;

    // While loop runs until left's index is greater than right's index.
    while (left <= right) {

        // Adds the number at the right index and decrements it, then adds the number at the left index and increments it.
        result.push(arr[right]);
        right--;
        result.push(arr[left]);
        left++;
    }
    return result;
}

console.log(rearrange([1, 2, 3, 4, 5, 6]));
// [6, 1, 5, 2, 4, 3]
console.log(rearrange([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]));
// [110, 10, 100, 20, 90, 30, 80,  40, 70, 50, 6]