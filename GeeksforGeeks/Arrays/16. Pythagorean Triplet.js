// Given an array arr of N integers, write a function that returns true if there is a triplet (a, b, c) that satisfies a ** 2 + b ** 2 = c ** 2, otherwise false.

function checkTriplet(arr) {

    // copyArr is a copy of arr using the spread operator.
    const copyArr = [...arr];

    // For loop through every index in copyArr.
    for (let i = 0; i < copyArr.length; i++) {

        // Square the element at the current index.
        copyArr[i] *= copyArr[i];
    }

    // Sort every element numerically from lowest to highest in copyArr.
    copyArr.sort((a, b) => a - b);

    // Instantiates i as the sum we want to reach (c), so it starts as the last index and this for loop will run until i is the third index.
    for (let i = copyArr.length - 1; i >= 2; i--) {

        /*
        left is the left pointer as the first index.
        right pointer at the index to the left of i.
        */
        var left = 0;
        var right = i - 1;

        // While the left pointer is less than the right pointer...
        while(left < right) {

            // If a triplet is found, return true.
            if(copyArr[left] + copyArr[right] === copyArr[i]) return true;

            /*
            If the elements at the left and right indices are less than the element at the i index, move the left pointer to the right because we will get a bigger sum 
            since copyArr is sorted numerically.
            */
            if(copyArr[left] + copyArr[right] < copyArr[i]) left++;

            /*
            If the elements at the left and right indices are greater than the element at the i index, move the right pointer to the left because we will get a smaller 
            sum.
            */
            else right--;
        }
    }

    // If the while loop breaks, no triplet was found so return false.
    return false;
}

console.log(checkTriplet([3, 2, 4, 6, 5]));
// true
console.log(checkTriplet([1, 2, 3]));
// false