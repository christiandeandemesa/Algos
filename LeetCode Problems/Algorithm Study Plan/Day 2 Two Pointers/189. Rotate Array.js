// Given an array, rotate the array to the right by k steps, where k is non-negative.

var rotate = function(nums, k) {

    // Removes the edge case of an empty array.
    if (!nums.length) {
        return "Cannot rotate an empty array";
    }
    
    // If k is greater than the array's length, set k to be the remainder of k divided by the array's length.
    if (k > nums.length) {
        k = k % nums.length;
    }

    // Calls the below function to reverse the entire array.
    reverse(nums, 0, nums.length-1);

    // Reverses the k elements since they are in the front of the array.
    reverse(nums, 0, k-1);

    // Reverses the non-k elements since they are in the back of the array.
    reverse(nums, k, nums.length-1);
    return nums;
};

// This function reverses an array using the two pointer technique. 
const reverse = (array, left, right) => {
    
    // Reverses the array by incrementing the two pointers (i.e. left++ and right--).
    while (left < right) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }
    return array;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// [5, 6, 7, 1, 2, 3, 4]

console.log(rotate([-1, -100, 3, 99], 2));
// [ 3, 99, -1, -100 ]

console.log(rotate([1, 2], 5));
// [2, 1]