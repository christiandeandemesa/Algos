/*
Given an array arr[] of N non-negative integers representing the height of blocks. If width of each block is 1, compute how much water can be trapped between the blocks 
during the rainy season. 
*/

function trappingWater(arr) {

    /*
    N is the length of arr.
    result will be how much water can be trapped.
    leftMax will be the index of the tallest left-most block.
    rightMax will be the index of the tallest right-most block.
    left is the left pointer starting at the first index.
    right is the right pointer starting at the last index.
    */
    const N = arr.length;
    let result = 0;
    let leftMax = 0
    let rightMax = 0;
    let left = 0
    let right = N - 1;

    // While the left pointer's index is less than or equal to the right pointer's index...
    while (left <= right) {

        // If the element at the left pointer is less than the element at the right pointer...
        if (arr[left] < arr[right]) {

            // If the element at the left pointer is taller than the left-most block, the left-most block is that element.
            if (arr[left] > leftMax) leftMax = arr[left];

            /*
            If the element at the left pointer is shorter than or equal to the left-most block, add the left-most block minus the element at 
            the left pointer to result.
            */
            else result += leftMax - arr[left];

            // Moves the left pointer to the right.
            left++;
        }

        // If the element at the left pointer is greater than or equal to the element at the right pointer...
        else {

            // If the element at the right pointer is taller than the right-most block, the right-most block is that element.
            if (arr[right] > rightMax) rightMax = arr[right];

            /*
            If the element at the right pointer is less than or equal to the right-most block, add the right-most block minus the element 
            at the right pointer to result.
            */
            else result += rightMax - arr[right];

            // Moves the right pointer to the left.
            right--;
        }
    }
    return result;
}

console.log(trappingWater([3, 0, 0, 2, 0, 4]));
// 10
console.log(trappingWater([6, 9, 9]));
// 0