/*
Given an array arr[] and an integer K where K is smaller than size of array, the task is to find the Kth smallest element in the given array. It is given that all array 
elements are distinct.
*/

function kthSmallest(arr, K) {

    /*
    sortedArr is a copy of arr using the spread operator ([...arr]), and sorts it numerically from lowest to highest.
    counter starts at K since we'll be decrementing it to return the element at the Kth index.
    */
    let sortedArr = [...arr].sort((a, b) => a - b);
    let counter = K;

    // For loop through each index in sortedArr, and it's less than arr.length + 1 in case we need to return the element at the last index in sortedArr.
    for(let i = 0; i < arr.length + 1; i++) {

        // Decrements counter first, then checks if counter is 0 to return the element at the current index.
        counter--;
        if(counter === 0) return sortedArr[i];
    }
}

console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3));
// 7
console.log(kthSmallest([7, 10, 4, 3, 20, 15], 6));
// 20