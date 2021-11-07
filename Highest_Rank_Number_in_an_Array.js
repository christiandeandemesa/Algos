/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, 
return the largest number among them.

No empty arrays will be given.
*/

function highestRank(arr) {

    /*
    Declares three lets: count will track how many times each number in the array appears, freqCount will track how many times the most 
    frequent number appears, and highestNum is the number that appears the most and is the highest in the array.
    */
    let count = 0;
    let freqCount = 1;
    let highestNum;

    /*
    Sorting the array numerically from highest number to lowest number. This is done because in the case of [1, 1, 1, 3, 3, 3], it will
    originally return 1 because the freqCount below will track 1, but never 3 because the number of times 3 appears will never be greater
    than the number of times 1 appears. So, if sorted to look like [3, 3, 3, 1, 1, 1], then the freqCount will track 3 instead.
    */
    arr.sort((a, b) => b - a);
    
    // First for loop tracks the first value in the array, and the second for loop tracks all subsequent values in the array.
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {

            // This if statement increases the count if arr[i] finds a duplicate of itself in the array.
            if (arr[i] === arr[j]) {
                count++;
            }

            /*
            This if statement changes freqCount to reflect the highest count, and highestNum to be the value that is attached to the highest
            count.
            */
            if (freqCount < count) {
                freqCount = count;
                highestNum = arr[i];
            }
        }

        // Resets the count for the next value in the first for loop.
        count = 0;
    }

    // Returns our answer, highestNum.
    return highestNum;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); // 12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); // 12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])); // 3
console.log(highestRank([1, 1, 1, 3, 3, 3])); // 3