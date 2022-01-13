/*
Given an array, arr, of n integers, calculate the respective first quartile (Q1), second quartile (Q2), and third quartile (Q3). It is 
guaranteed that Q1, Q2, and Q3 are integers.
*/

function quartiles(arr) {
    arr = arr.sort((a, b) => a - b);
    let leftArr = [];
    let rightArr = [];
    let count = 0;
    for(let i = 0; i < arr.length; i++) {

        // Creates an array for all the elements on the left if the original array has an even number of elements.
        if(count < arr.length / 2 && arr.length % 2 === 0) leftArr.push(arr[i]);

        /*
        Creates an array for all the elements on the left if the original array has an odd number of elements (needed to avoid including 
        the median (i.e. Q2)).
        */
        else if(count + 1 < arr.length / 2 && arr.length % 2 === 1) leftArr.push(arr[i]);

        // Creates an array for all the elements on the right.
        else if(count >= arr.length / 2) rightArr.push(arr[i]);
        count++;
    }

    // Initializes three different variables.
    let Q1, Q2, Q3;

    // If the left array is even, Q1 is the average of the middle two numbers.
    if(leftArr.length % 2 === 0) Q1 = ((leftArr[leftArr.length / 2 - 1] + leftArr[leftArr.length / 2]) / 2);

    // If the left array is odd, Q1 is the middle number.
    else Q1 = (leftArr[Math.floor(leftArr.length / 2)]);
    
    // If the original array is even, Q2 is the average of the middle two numbers.
    if(arr.length % 2 === 0) Q2 = ((arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2);

    // If the original array is odd, Q2 is the middle number.
    else Q2 = (arr[Math.floor(arr.length / 2)]);

    // If the right array is even, Q3 is the average of the middle two numbers.
    if(rightArr.length % 2 === 0) Q3 = ((rightArr[rightArr.length / 2 - 1] + rightArr[rightArr.length / 2]) / 2);

    // If the right array is odd, Q3 is the middle number.
    else Q3 = (rightArr[Math.floor(rightArr.length / 2)]);

    // Must return the answer like this to pass HackerRank.
    return [Q1, Q2, Q3];
}

console.log(quartiles([3, 7, 8, 5, 12, 14, 21, 13, 18]));
// [6, 12, 16]

console.log(quartiles([1, 2, 3, 4, 5, 6]));
// [2, 3.5, 5]