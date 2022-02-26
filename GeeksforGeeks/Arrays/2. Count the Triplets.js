// Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.

function countTriplet(arr) {

    // Removes the edge case of an array not having enough elements to create a triplet.
    if (arr.length < 3) return 'Array must have at least 3 elements to form a triplet';

    // Sorts the array from lowest to highest numerically to use the two-pointer technique.
    arr.sort((a, b) => a - b);

    // Instanitates a count variable to keep track of how many triplets we have.
    let count = 0;

    /*
    For loop to go through every element in the array.
    Since i is representing the element we want to sum to, we have it start at the last index (largest number) and work down to the third 
    index because the first and second indices are the minimum indices for our two pointers.
    */
    for (let i = arr.length - 1; i >= 2; i--) {

        // Instantiates the left pointer at the first index, and the right pointer at the index to the left of i (second largest number).
        let left = 0;
        let right = i - 1;

        /*
        While loop to move the pointers to find every possible sum for the triplet (e.g. [1, 2, 3, 4, 5] if i is 5, then there are two 
        sums: 1 + 4 and 2 + 3).
        We have the while loop break when left is equal to right because it means we have searched through every possible combination of 
        sums for the triplet.
        */
        while (left < right) {

            /*
            If the numbers at left and right sum to the number at i, we increment the count and left, and decrement right.
            Notice this only works because the array has distinct integers (e.g. [1, 1, 1, 2] should return 3 but this function will only 
            return 1).
            */
            if (arr[left] + arr[right] === arr[i]) {
                count++;
                left++;
                right--;
            }

            /*
            If the sum of the left and right numbers is less than the number at i, we increment left because moving the left pointer will 
            give us a bigger sum.
            */
            else if (arr[left] + arr[right] < arr[i]) left++;

            /*
            If the sum of the left and right numbers is greater than the number at i, we decrement right because moving the right pointer 
            will give us a smaller sum.
            */
            else right--;
        }
    }
    return count;
}

console.log(countTriplet([1, 5, 3, 2]));
// 2
console.log(countTriplet([1, 2, 3, 4, 5, 6]));
// 6
console.log(countTriplet([1, 0, 2]));
// 0
console.log(countTriplet([1, 0]));
// 'Array must have at least 3 elements to form a triplet'