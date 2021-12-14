/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a 
specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.
*/

var twoSum = function(numbers, target) {
    let first = 0;
    let second = 1;
    while(first <= numbers.length - 1) {

        // Returns the result if both the elements at their indices are equal to the target.
        if(numbers[first] + numbers[second] === target) {
            return [first + 1, second + 1];
        }
        else {

            // Otherwise increment the second pointer.
            second++;

            // If the second pointer runs to the end of the array:
            if(!numbers[second]) {

                // Increment the first pointer.
                first++;

                // Give the second pointer the index after the first pointer.
                second = first + 1;
            }
        }
    }

    // Removes the edge case of not being able to add to the target with the elements in the given array.
    return [1, 2];
}

console.log(twoSum([2, 7, 11, 15], 9));
// [1, 2]

console.log(twoSum([2, 3, 4], 6));
// [1, 3]

console.log(twoSum([-1, 0], 6));
// [1, 2]