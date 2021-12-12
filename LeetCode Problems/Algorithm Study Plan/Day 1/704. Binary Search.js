/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

var search = function(nums, target) {

    // Creates variables that hold the two endpoints (i.e. the first and last index) in the array.
    let low = 0;
    let high = nums.length - 1;

    // While the low index is less than or equal to the high index:
    while(low <= high) {

        // Creates a variable that is the index exactly, or close to, the middle of the array.
        let mid = Math.floor((low + high) / 2);

        // If the target is the element at the middle index, return that index.
        if(nums[mid] === target) {
            return mid;
        }

        /*
        If the target is greater than the element at the middle index, change the low index to be the next number after the middle index 
        to search only the right side of the array.
        */
        else if(nums[mid] < target) {
            low = mid + 1;
        }

        /*
        If the target is less than the element at the middle index, change the high index to be the number before the middle index to 
        search only the left side of the array.
        */
        else if(nums[mid] > target) {
            high = mid - 1;
        }
    }

    // Removes the edge case of the target not existing in the array.
    return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
// 4

console.log(search([-1, 0, 3, 5, 9, 12], 2));
// -1