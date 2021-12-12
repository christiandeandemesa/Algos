/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails 
the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. 
You should minimize the number of calls to the API.
*/

// This function checks to see if the version is bad or not.
var isBadVersion = function (num) {

    // If the version (i.e. num) is after or is the bad version, it returns true.
    if (num >= badVersion) {
        return true;
    }

    // If it is not a bad version, return false.
    return false;
}

// This function looks for the first bad version.
var solution = function (n) {

    // Creates three variables where low is the first index, high is the last index, and bad is the result we want.
    let low = 1;
    let high = n;

    // Bad is set to -1 to cover edge cases where there is no bad version.
    let bad = -1;

    // Refer to 704. Binary Search for more information on how this works.
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        /*
        If mid is a bad version, sets bad as mid and moves high to the index before mid to see if there are versions before mid that are 
        also bad.
        */
        if (isBadVersion(mid)) {
            bad = mid;
            high = mid - 1;
        }

        // If mid is not a bad version, sets low the index after mid to see if there are bad versions after mid.
        else {
            low = mid + 1;
        }
    }
    return bad;
}

// badVersion is the first bad version, and is used in the isBadVersion function.
let badVersion = 4;
console.log(solution(5));
// 4

badVersion = 1;
console.log(solution(1));
// 1