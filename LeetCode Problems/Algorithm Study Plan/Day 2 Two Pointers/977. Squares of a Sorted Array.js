/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

var sortedSquares = function(nums) {

    /*
    Creates four variables where result is an empty array which we will return, left is the first index, right is the last index, and 
    position starts where the biggest number will be positioned (i.e. the last index).
    */
    let result = [];
    let left = 0;
    let right = nums.length - 1;
    let position = right;

    // While the left index is smaller than the right index:
    while(left <= right) {

        // If the left index's element squared is greater than the right index's element squared:
        if(nums[left] ** 2 > nums[right] ** 2) {

            /*
            Add nums[left] ** 2 to result[position], move the position to the left (i.e. [position--]), and move the left pointer to the 
            right (i.e. [left++])
            */
            result[position--] = nums[left++] ** 2;
        }

        // If the left index's element squares is less than the right index's element squared:
        else {

            /*
            Add nums[right] ** 2 to result[position], move the position to the left, and move the right pointer to the left (i.e. 
            [right--])
            */
            result[position--] = nums[right--] ** 2;
        }
    }
    return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
//[0, 1, 9, 16, 100]

console.log(sortedSquares([-7, -3, 2, 3, 11]));
//[4, 9, 9, 49, 121]