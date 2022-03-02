/*
Given two sorted arrays arr1[] and arr2[] of sizes N and M in non-decreasing order. Merge them in sorted order without using any extra space. Modify arr1 so that it 
contains the first N elements and modify arr2 so that it contains the last M elements.
*/

function merge(arr1, arr2) {

    /*
    N is the length of arr1.
    i will be incremented to break the while loop.
    temp will hold the value we want to swap between the two arrays.
    */
    const N = arr1.length;
    let i = 0;
    let temp = 0;

    // While loop will run until all the numbers in arr1 are less than the smallest number of arr2.
    while (arr1[N - 1] > arr2[0]) {

        // If the number at the current index in arr1 is greater than the smallest number of arr2...
        if (arr1[i] > arr2[0]) {

            // Swap which their array they are in.
            temp = arr1[i];
            arr1[i] = arr2[0];
            arr2[0] = temp;

            // Sort arr2 so that the lowest number is in the first index.
            arr2.sort((a, b) => a - b);
        }
        i++;
    }
    // \n creates a new line.
    return `First Array: ${arr1}\nSecond Array: ${arr2}`;
}

console.log(merge([1, 3, 5, 7], [0, 2, 6, 8, 9]));
/*
First Array: 0, 1, 2, 3
Second Array: 5, 6, 7, 8, 9
*/
console.log(merge([10, 12], [5, 18, 20]));
/*
First Array: 5, 10
Second Array: 12, 18, 20
*/
console.log(merge([], [3, 6, 9]));
/*
First Array: 
Second Array: 3, 6, 9
*/