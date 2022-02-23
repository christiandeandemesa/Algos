/*
You have three stacks of cylinders where each cylinder has the same diameter, but they may vary in height. You can change the height of a 
stack by removing and discarding its topmost cylinder any number of times.

Find the maximum possible height of the stacks such that all of the stacks are exactly the same height. This means you must remove zero or 
more cylinders from the top of zero or more of the three stacks until they are all the same height, then return the height.
*/

function equalStacks(h1, h2, h3) {

    // Initializes stacks as an array where the first index is h1 spread, the second index is h2 spread, and the last index is h3 spread.
    const stacks = [[...h1], [...h2], [...h3]];

    /*
    Initializes height as an array where the first index is the sum of all the elements in the stacks' first index, the second index is the
    sum of all the elements in the stacks' second index, and the last index is the sum of all the elements in the stacks' last index.
    */ 
    const heights = [
        stacks[0].reduce((sum, elem) => sum += elem, 0),
        stacks[1].reduce((sum, elem) => sum += elem, 0),
        stacks[2].reduce((sum, elem) => sum += elem, 0),
    ];
    
    // Initializes indices as an array where all three indices are 0.
    const indices = [0, 0, 0];

    // The while loop runs until all of heights' indices are the same number.
    while(heights[0] !== heights[1] || heights[1] !== heights[2]) {

        // Initializes idx as the heights' index with the largest number.
        const idx = heights.indexOf(Math.max(...heights));

        // Removes the first element from the stacks connected to heights.
        heights[idx] -= stacks[idx][indices[idx]++];
    }

    // Returns the number heights' index 0, but you can pick any index since they are all the same.
    return heights[0];
}

console.log(equalStacks([1, 2, 1, 1], [1, 1, 2], [1, 1]));
// 2
console.log(equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4, 1]));
// 5
console.log(equalStacks([1, 1, 1, 1, 2], [3, 7], [1, 3, 1]));
// 0