/*
Given an array, arr, of n integers, calculate and print the standard deviation. Your answer should be in decimal form, rounded to a scale 
of 1 decimal place (i.e., 12.3 format). An error margin of +/-0.1 will be tolerated for the standard deviation.
*/

function stdDev(arr) {
    let sum = 0;

    // This gets the sum of all the numbers in arr.
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const avg = sum / arr.length;
    let newArr = [];

    // This creates a new array from all the elements in arr.
    for(let i = 0; i < arr.length; i++) {

        // value is what is returned form the operation function.
        const value = operation(arr[i], avg);
        newArr.push(value);
    }
    let sum2 = 0;

    // This gets the sum of all the numbers in newArr.
    for(let i = 0; i < newArr.length; i++) {
        sum2 += newArr[i];
    }
    console.log((Math.sqrt(sum2 / arr.length, 2)).toFixed(1));
}

// This function is a mathematical operation that needs to be applied to all elements in the array.
function operation(num, avg) {
    num = (num - avg) ** 2;
    return num;
}

stdDev([10, 40, 30, 50, 20]);
// 14.1