/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it 
would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

var searchInsert = function(nums, target) {

    /* 
    Creates three variables where low points to the first index, high points to the last index, and position will be the position the 
    target should be inserted if it does not exist in the array.
    */
    let low = 0;
    let high = nums.length - 1;
    let position;

    // Refer to 704. Binary Search for more information on how this works.
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(nums[mid] === target) {
            return mid;
        }

        /*
        Gives position the index after mid since the target will always be inserted after the element at the mid index because the target 
        is greater.
        */
        else if(nums[mid] < target) {
            low = mid + 1;
            position = mid + 1;
        }

        /*
        Gives position the index at mid since the target will always be inserted before the element at the mid index because the 
        target is less than it.
        */
        else if(nums[mid] > target) {
            high = mid - 1;
            position = mid;
        }
    }
    return position;
}

console.log(searchInsert([1, 3, 5, 6], 5));
// 2

console.log(searchInsert([1, 3, 5, 6], 2));
// 1

console.log(searchInsert([1, 3, 5, 6], 7));
// 4

console.log(searchInsert([1, 3, 5, 6], 0));
// 0

console.log(searchInsert([1], 0));
// 0