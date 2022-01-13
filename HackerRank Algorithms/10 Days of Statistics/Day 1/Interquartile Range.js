/*
The interquartile range of an array is the difference between its first (Q1) and third (Q3) quartiles (i.e., Q3 - Q1).

Given an array, values, of n integers and an array, freqs, representing the respective frequencies of values's elements, construct a data 
set, S, where each values[i] occurs at frequency freqs[i]. Then calculate and print S's interquartile range, rounded to a scale of 1 
decimal place (i.e., 12.3 format).
*/

function interQuartile(values, freqs) {
    let arr = [];
    for(let i = 0; i < values.length; i++) {

        // While the number that freqs[i] > 0, then the code will run. Needed to push multiple instances of the same value into arr.
        while(freqs[i] > 0) {
            arr.push(values[i]);

            // Subtracts 1 from the current freqs[i] to eventually break out of the while loop.
            freqs[i] -= 1;
        }
    }

    // Everything below is similar to Quartiles.js
    arr = arr.sort((a, b) => a - b);
    let leftArr = [];
    let rightArr = [];
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(count < arr.length / 2 && arr.length % 2 === 0) leftArr.push(arr[i]);
        else if(count + 1 < arr.length / 2 && arr.length % 2 === 1) leftArr.push(arr[i]);
        else if(count >= arr.length / 2) rightArr.push(arr[i]);
        count++;
    }
    let Q1, Q3;
    if(leftArr.length % 2 === 0) Q1 = ((leftArr[leftArr.length / 2 - 1] + leftArr[leftArr.length / 2]) / 2);
    else Q1 = (leftArr[Math.floor(leftArr.length / 2)]);
    if(rightArr.length % 2 === 0) Q3 = ((rightArr[rightArr.length / 2 - 1] + rightArr[rightArr.length / 2]) / 2);
    else Q3 = (rightArr[Math.floor(rightArr.length / 2)]);
    console.log((Q3 - Q1).toFixed(1));
}

interQuartile([6, 12, 8, 10, 20, 16], [5, 4, 3, 2, 1, 5]);
// 9.0