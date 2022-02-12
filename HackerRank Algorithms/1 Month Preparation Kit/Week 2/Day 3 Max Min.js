/*
You will be given a list of integers, arr, and a single integer k. You must create an array of length k from elements of arr such that its 
unfairness is minimized. Call that array arr'. Unfairness of an array is calculated as max(arr') - min(arr').

Where:
    max denotes the largest integer in arr'.
    min denotes the smallest integer in arr'.
*/
function maxMin(k, arr) {

    // Creates a new copy of the array and sorts it from lowest to highest numerically.
    let newArr = [...arr].sort((a, b) => a - b);

    // Initializes result as the largest number javascript can handle.
    let result = Number.MAX_SAFE_INTEGER;

    /*
    For loop to go through every block of k-size elements in arr (e.g. if arr = [1, 2, 3, 4, 5] and k = 3, it will run through arr 3 times 
    to reflect [1, 2, 3], [2, 3, 4], and [3, 4, 5]).
    */
    for(let i = 0; i <= arr.length - k; i++) {

        /*
        currDiff is the current difference between the last and first elements of the block (e.g. if the block is [1, 2, 3], then currDiff 
        = 2).
        */
        let currDiff = newArr[k + i - 1] - newArr[i];

        // If currDiff is less than result, change result to be currDiff to reflect the smallest max-min.
        if(currDiff < result) result = currDiff;
    }
    return result;
}

console.log(maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]));
// 3
console.log(maxMin(3, [100, 200, 300, 350, 400, 401, 402]));
// 2