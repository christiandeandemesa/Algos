/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

var twoSum = function(nums, target) {
    // Creates a new Map object that holds key-value pairs.
    const map = new Map();

    for (let index = 0; index < nums.length; index++) {
        let num = target - nums[index];

        // If the map has the number as a one of its set keys (i.e. num):
        if (map.has(num)) {
            // Return an array with index of the matching number, and the index our for loop is currently at.
            return [map.get(num), index]
        }

        // Sets in our map the key as the number in the nums array, and the value as its index in the nums array.
        map.set(nums[index], index)
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
// [0, 1]

console.log(twoSum([3, 2, 4], 6));
// [1, 2]

console.log(twoSum([3, 3], 6));
// [0, 1]