/*
Given an array Arr (distinct elements) of size N. Rearrange the elements of array in zig-zag fashion. The converted array should be in form a < b > c < d > e < f. The 
relative order of elements is same in the output i.e you have to iterate on the original array only.
*/

function zigZag(Arr) {

    /*
    N is the length of the array.
    equalOp (equality operator) is supposed to mimic < when it's true, or > when it's false.
    */
    const N = Arr.length;
    let equalOp = true;

    // For loop through every index in Arr.
    for (let i = 0; i < N - 1; i++) {
        
        // If we need the current index's element to be less than the next index's element...
        if (equalOp === true) {

            // If the current index's element is greater than the next index's element, switch the elements' positions.
            if (Arr[i] > Arr[i + 1]) {
                let temp = Arr[i];
                Arr[i] = Arr[i + 1];
                Arr[i + 1] = temp;
            }

            // If the current index's element is less than the next index's element, we want to preserve that order so do nothing.
        }

        // If we need the current index's element to be greater than the next index's element...
        else {

            // If the current index's element is less than the next index's element, switch the elements' positions.
            if (Arr[i] < Arr[i + 1]) {
                let temp = Arr[i];
                Arr[i] = Arr[i + 1];
                Arr[i + 1] = temp;
            }

            // If the current index's element is greater than the next index's element, we want to preserve that order so do nothing.
        }

        // Swtiches equalOp between true and false to alternate between < and >.
        equalOp = !equalOp;
    }
    return Arr;
}

console.log(zigZag([4, 3, 7, 8, 6, 2, 1]));
// [3, 7, 4, 8, 2, 6, 1]