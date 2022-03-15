// Given an unsorted array of size N. Find the first element in array such that all of its left elements are smaller and all right elements to it are greater than it.

function findElement(arr) {

    // N is the length of the array.
    const N = arr.length;

    // Removes the edge case of arrays with less than 3 elements.
    if(N < 3) return 'The array needs at least 3 elements';

    /*
    left is the left pointer that starts at the second index.
    right is the right pointer that starts at the third index.
    */
    let left = 1;
    let right = 2;

    // While the right pointer is at the right-most index or left of it...
    while(right < N) {

        // If left's index's element is greater than the element at the index before it and is less than the right's index's element, move the right pointer to the right.
        if(arr[left] > arr[left - 1] && arr[left] < arr[right]) right++;

        // Otherwise move the left pointer to the right, and the right pointer is the index after it.
        else {
            left++;
            right = left + 1;
        }
    }

    // If left is the last index in the array, there was no element that met the requirements.
    if(left === N - 1) return 'No element exists';

    // Otherwise return the element at that index.
    return arr[left];
}

console.log(findElement([4, 2, 5, 7]));
// 5
console.log(findElement([0]));
// 'The array needs at least 3 elements'
console.log(findElement([0, 0, 0, 0]));
// 'No element exists'
console.log(findElement([1, 0, 0, 0]));
// 'No element exists'
console.log(findElement([0, 0, 0, 1]));
// 'No element exists'