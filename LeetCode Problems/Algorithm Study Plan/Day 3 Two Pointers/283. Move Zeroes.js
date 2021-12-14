/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

var moveZeroes = function(nums) {
    let first = 0;
    let second = 0;
    while(first <= nums.length - 1) {

        // If the element at the first index in the array is 0, move first to the next index.
        if(nums[first] === 0) {
            first++;
        }

        // If the element at the first index in the array is not 0:
        else {

            // Replace the element at the second index with the element at the first index.
            nums[second] = nums[first];
            second++;
            first++;

            /*
            The above code essentially takes all the non-zero elements and copies them in order as the first elements 
            of the array.
            */
        }
    }
    
    // At this point second should be equal to how many 0's were in the array plus 1.
    while(second < nums.length) {

        // Replaces the end of the array with 0's.
        nums[second] = 0;
        second++;
    }
    return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]

console.log(moveZeroes([0]));
// [0]