/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

var search = function(nums, target) {

    // For loop to go through every index in the nums array.
    for(let i = 0; i < nums.length; i++) {

        // If the element at the current index is equal to the target:
        if(nums[i] === target) {

            // Return the index.
            return i;
        }
    }

    // If you go through the above for loop without triggering the if statement, return -1.
    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
// 4

console.log(search([-1, 0, 3, 5, 9, 12], 2));
// -1