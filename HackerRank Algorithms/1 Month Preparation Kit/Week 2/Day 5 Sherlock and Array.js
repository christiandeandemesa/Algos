/*
Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left 
is equal to the sum of all elements to the right.
*/

function balancedSums(arr) {

    // For loop through every element in arr.
    for(let i = 0; i < arr.length; i++) {

        // leftSum is all the elements to the left of i, adding [0] for when i = 0, summed using reduce().
        let leftSum = arr.slice(0, i).concat([0]).reduce((a, b) => a + b);

        // rightSum is all the elements to the right of i, adding [0] for when i = arr.length - 1, summed using reduce().
        let rightSum = arr.slice(i + 1).concat([0]).reduce((a, b) => a + b);
        if(leftSum === rightSum) return 'YES';
    }

    // If the if statement is never met, return NO.
    return 'NO';
}

console.log(balancedSums([5, 6, 8, 11]));
// 'YES'
console.log(balancedSums([2, 0, 0, 0]));
// 'YES'
console.log(balancedSums([1, 2, 3, 4]));
// 'NO'