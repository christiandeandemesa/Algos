/*
The cost of stock on each day is given in an array A[] of size N. Find all the days on which you buy and sell the stock so that in between those days your profit is 
maximum.
*/

function stockBuySell(A) {

    /*
    N is the length of the array.
    result is an empty array.
    i starts at 0, and is initialized here to be used in the below while loop.
    */
    const N = A.length;
    let result = [];
    let i = 0;

    // While i is less than length of the array...
    while(i < N - 1) {

        // i increments until i is the last index in the array, or the element at the index after i is greater than the element at i's index.
        while((i < N - 1) && (A[i + 1] <= A[i])) {
            i++;
        }
        
        // If i is at the last index, break the while loop.
        if(i === N - 1) break;

        /*
        buy is i, then increments i.
        For example:
        If i = 3, then buy = 3 and i = 4.
        */
        let buy = i++;

        // i increments until i is undefined, or the element at the index before i is greater than the element at i's index.
        while((i < N) && (A[i - 1] <= A[i])) {
            i++;
        }

        // sell is i minus 1.
        let sell = i - 1;

        // Adds an array where buy's number is at index 0 and sell's number is at index 1, as the last element in result.
        result.push([buy, sell]);
    }

    // If result is not empty, return it.
    if(result.length > 0) return result;

    // If result is empty, return the string.
    else return 'No profit';
}

console.log(stockBuySell([100, 180, 260, 310, 40, 535, 695]));
// [[0, 3], [4, 6]]
console.log(stockBuySell([4, 2, 2, 2, 4]));
// [[3, 4]]
console.log(stockBuySell([5, 1]));
// 'No profit'
console.log(stockBuySell([1]));
// 'No profit'