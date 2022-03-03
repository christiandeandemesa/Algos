// Given two arrays X and Y of positive integers, find the number of pairs such that x ** y > y ** x where x is an element from X and y is an element from Y.

function countPairs(X, Y) {

    /*
    suffix is an array with 1005 elements, all being 0.
    totalPairs will be the number of x and y pairs that meet the condition.
    */
    let suffix = new Array(1005).fill(0);
    let totalPairs = 0;

    // For loop through each index in Y.
    for (let i = 0; i < Y.length; i++) {
        /*
        If Y = [1, 5] and suffix = [0, 0, 0, 0, 0, 0..., 0], then this for loop modifies suffix to be [0, 1, 0, 0, 0, 1..., 0].
        It looks at the number at each index (e.g. 1) in Y, then increments the corresponding index in suffix (e.g. the first index is now 1 instead of 0).
        */
        suffix[Y[i]]++;
    }
    
    // For loop from the 1000th to the 3rd index in suffix.
    for (let i = 1000; i >= 3; i--) {
        // The number at the current index is incremented by the number at the index to the right of it.
        suffix[i] += suffix[i + 1];
    }
    
    // Doing the above two for loops is meant to mimic the diagram of exceptions here: https://practice.geeksforgeeks.org/problems/number-of-pairs-1587115620/1.

    // For loop through each index in X.
    for (let i = 0; i < X.length; i++) {

        // If X is 0, there is no positive integer Y could be to get a pair that matches the condition, so continue to skip line 49.
        if (X[i] === 0) continue;

        // If X is 1, the only positive integer Y could be is 1, so add how many 1's are in Y (suffix[0]) and continue to skip line 49.
        else if (X[i] === 1) {
            totalPairs += suffix[0];
            continue;
        }

        // If X is 2, the only positive integers Y could be is 0 and 1, and add the amount of both in Y (suffix[5]).
        else if (X[i] === 2) totalPairs += suffix[5];

        // If X is 3, the only positive integers Y could not be is 3, and add the amount of non-3's in Y (suffix[2] + suffix[4]).
        else if (X[i] === 3) totalPairs += suffix[2] + suffix[4];

        // There are no other exceptions, so add the other numbers in suffix normally.
        else totalPairs += suffix[X[i] + 1];
        totalPairs += suffix[0] + suffix[1];
    }
    return totalPairs;
}

console.log(countPairs([2, 1, 6], [1, 5]));
// 3