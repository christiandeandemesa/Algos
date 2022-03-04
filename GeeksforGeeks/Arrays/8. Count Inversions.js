/*
Given an array of integers. Find the Inversion Count in the array. 

Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. If array is already sorted then the inversion count is 0. If 
an array is sorted in the reverse order then the inversion count is the maximum.

Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
*/

function inversionCount(arr) {

    /*
    count will keep track of how many inversions we need to sort the array.
    left is the left pointer at the first index.
    right is the right pointer at the second index.
    */
    let inverCount = 0;
    let left = 0;
    let right = 1;

    // While loop runs until the left pointer is the second to last element in the array because the right pointer will be the last element in the array.
    while (left < arr.length - 1) {

        // If the element at the left pointer is greater than the element at the right pointer, increment inverCount.
        if (arr[left] > arr[right]) inverCount++;

        // If the right pointer is not the last element in the array, move it to the right.
        if (right < arr.length) right++;

        // If the right pointer is the last element in the array, move the left pointer to the right and set the right pointer to the index after it.
        else {
            left++;
            right = left + 1;
        }
    }
    return inverCount;
}

console.log(inversionCount([1, 2, 3, 4, 5]));
// 0
console.log(inversionCount([5, 4, 3, 2, 1]));
// 10
console.log(inversionCount([2, 4, 1, 3, 5]));
// 3