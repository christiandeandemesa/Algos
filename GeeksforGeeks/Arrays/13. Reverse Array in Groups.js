// Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.

function reverseInGroups(arr, k) {

    // N is arr's lengh.
    const N = arr.length;

    // For loop through every kth index in arr.
    for(let i = 0; i < N; i += k) {

        /*
        left is the current index.
        right is the last index in the k-length block or the last index in arr.
        
        For example:
        If arr = [1, 2, 3, 4, 5], k = 3, and i = 0, then left is at index 0 and right is at index 2.
        Then, when i = 3, then left is at index 3 and right is at index 4.
        */
        let left = i;
        let right = Math.min(i + k - 1, N - 1);

        // While left is less thanright...
        while(left < right) {

            // Switch the elements at the left and right indices.
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            // Increments left and decrements right.
            left++;
            right--;
        }
    }
    return arr;
}

console.log(reverseInGroups([1, 2, 3, 4, 5], 3));
// [3, 2, 1, 5, 4]
console.log(reverseInGroups([1, 2, 3, 4, 5], 5));
// [5, 4, 3, 2, 1]