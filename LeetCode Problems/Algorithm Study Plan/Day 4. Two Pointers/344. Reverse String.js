/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    let temp;
    while(left <= right) {

        // Saves the elements at the left index in temp.
        temp = s[left];

        // Changes the element at the left index to be the element at the right index.
        s[left] = s[right];

        // Changes the element at the right index to be the element at the left index.
        s[right] = temp;

        // Moves the pointers toward each other.
        left++;
        right--;
    }
    return s;
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
// ["o", "l", "l", "e", "h"]

console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
// ["h", "a", "n", "n", "a", "H"]