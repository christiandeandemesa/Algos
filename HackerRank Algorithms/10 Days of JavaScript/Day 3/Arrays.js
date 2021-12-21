// Return the second largest number in the array.

function getSecondLargest(nums) {

    /*
    array.sort will re-order the elements in array. 
    An arrow function, as denoted by =>, is a compact version of an unnamed function.

    Could have written the arrow function instead as:
    function highNum(a, b) {
        return b - a;
    }

    Look at the README.md for more information on sorting order, and how the arrow function sorts numbers in descending order.
    */
    nums.sort((a, b) => b - a);
    for(let i = 0; i < nums.length; i++) {

        /*
        The if statement says if the number at index 0 in the nums array is not equal (!==) to the number at index i in the nums array, 
        then return the number at index i in the nums array.
        */
        if(nums[0] !== nums[i]) return nums[i];
    }
}

console.log(getSecondLargest([1, -2, 3, -4, 5, 5]));
// 3