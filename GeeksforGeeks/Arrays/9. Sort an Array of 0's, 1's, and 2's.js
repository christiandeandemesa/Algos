// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

function sort012(arr) {

    // Each count keeps track of 0's, 1's, and 2's respectively.
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    // For loop to go thorugh every index in arr.
    for(let i = 0; i < arr.length; i++) {

        // Uses a switch statement on the number at the current index, to increment its respective count.
        switch(arr[i]) {
        case 0:
            count0++;
            break;
        case 1:
            count1++;
            break;
        case 2:
            count2++;
            break;
        }
    }

    // Instantiate a new i for the zero index, since the last i we instantitated only exists in the for loop code block.
    let i = 0;

    // Uses a while loop on each count to add the element to each index, and the while loops are in order of 0, 1, and 2.
    while (count0 > 0) {
        // This line reads as arr[i] = 0, then i++.
        arr[i++] = 0;
        count0--;
    }
    while (count1 > 0) {
        arr[i++] = 1;
        count1--;
    }
    while (count2 > 0) {
        arr[i++] = 2;
        count2--;
    }
    return arr;
}

console.log(sort012([2, 2, 1, 1, 0, 0]));
// [0, 0, 1, 1, 2, 2]