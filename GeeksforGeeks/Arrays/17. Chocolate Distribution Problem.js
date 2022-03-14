/*
Given an array array A[ ] of positive integers size N, where each value represents the number of chocolates in a packet. Each packet can have a variable number of 
chocolates. There are M students, the task is to distribute chocolate packets among M students such that:

1. Each student gets exactly one packet.
2. The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum.
*/

function findMinDiff(A, M) {

    // N is the length of the array.
    const N = A.length;

    // Removes the edge cases of having no packets (i.e. an empty array), or every packet in the array has 0 chocolates (i.e. every element is 0).
    if(A.length === 0 || A.every(num => num === 0)) return 'You need at least 1 packet with at least 1 chocolate';

    // Removes the edge case of having no students (i.e. M is 0).
    if(M === 0) return 'You need at least 1 student';

    // Removes the edge case of the array's length being less than the number of students.
    if(A.length < M) return 'You need at least 1 packet for each student';

    // Sorts the array numerically from lowest to highest without mutating the original array.
    let sortArr = [...A].sort((a, b) => a - b);

    // minDiff starts as the largest integer because we want it to be a smaller number.
    let minDiff = Number.MAX_SAFE_INTEGER;

    /*
    For loop through every block of M-size elements in the sorted array.
    For example:
    If sortArr = [1, 1, 2, 3, 5, 8] and m = 5, then it runs until i < 2, so the for loop runs twice.
    */
    for(let i = 0; i < sortArr.length - M + 1; i++) {

        /*
        diff is the last element in the M-size block minus the first element in the M-size block.
        For example: 
        The first m-size block is [1, 1, 2, 3, 5], and diff = 5 - 1 = 4.
        */
        let diff = sortArr[i + M - 1] - sortArr[i];

        // If diff is less than minDiff, then change minDiff.
        if(diff < minDiff) minDiff = diff;
    }
    return minDiff;
}

console.log(findMinDiff([3, 4, 1, 9, 56, 7, 9, 12], 5));
// 6
console.log(findMinDiff([6, 2, 62, 31, 79, 6, 21, 37, 45, 27, 23], 3));
// 4
console.log(findMinDiff([], 3));
// 'You need at least 1 packet with at least 1 chocolate'
console.log(findMinDiff([0, 0, 0], 3));
// 'You need at least 1 packet with at least 1 chocolate'
console.log(findMinDiff([1, 2, 3], 0));
// 'You need at least 1 student'
console.log(findMinDiff([1, 2, 3], 4));
// 'You need at least 1 packet for each student'