/*
Given an array A of positive integers. Your task is to find the leaders in the array. An element of array is leader if it is greater than or equal to all the elements 
to its right side. The rightmost element is always a leader. 
*/

function leaders(A) {
    
    // Break case returns an empty array if A is an empty array.
    if(A.length < 1) return [];

    /*
    leader will hold the largest number in the array.
    leaderIdx to hold the index the leader is at.
    */
    let leader = 0;
    let leaderIdx = 0;

    // For loop to find the leader and its leaderIdx in the array.
    for(let i = 0; i < A.length; i++) {
        if(A[i] > leader) {
            leader = A[i];
            leaderIdx = i;
        }
    }

    /*
    Calls the function recursively.
    Returns leader in the form of an element in an array ([leader]).
    Uses .concat() to combine the arrays generated with recursion.
    Uses .slice() to send arrays with elements composed of only elements to the right of the leader.

    To illustrate:
    In A = [3, 2, 1], the first function will return [3].concat(leaders(A.slice(0 + 1))) because 3 is the leader at index 0.
    The next recursive function returns [2].concat(leaders(A.slice(0 + 1))).
    The next recursive function returns [1].concat(leaders(A.slice(0 + 1))).
    The last recursive function hits the breaks case because [1].slice(1).length = 0, so it returns [].
    So the first function returns [3].concat([2].concat([1].concat([]))) which is [3, 2, 1].
    */
    return [leader].concat(leaders(A.slice(leaderIdx + 1)));
}

console.log(leaders([16, 17, 4, 3, 5, 2]));
// [17, 5, 2]
console.log(leaders([1, 2, 3, 4]));
// [4]