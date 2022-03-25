// Given two strings a and b. The task is to find if the string 'b' can be obtained by rotating another string 'a' by exactly 2 places.

function isRotated(str1, str2) {

    // Removes the edge case of having two strings of different lengths.
    if(str1.length !== str2.length) return false;

    // If str1 is only one character, it will be the same regardless of rotation.
    if(str1.length < 2) return true;
    
    // antiClockRot simulates if the first two characters in str1 became the last two characters (e.g. am-azon becomes azon-am).
    const antiClockRot = str1.substring(2, str1.length) + str1.substring(0, 2);
    
    // clockRot simulates if the last two characters in str1 became the first two characters (e.g. amaz-on becomes on-amaz).
    const clockRot = str1.substring(str1.length - 2, str1.length) + str1.substring(0, str1.length - 2);

    // If either of the two simulated strings is equal to str2 return true.
    if(antiClockRot === str2 || clockRot === str2) return true;

    // Otherwise return false.
    else return false;
}

console.log(isRotated('amazon', 'azonam'));
// true
console.log(isRotated('geeksforgeeks', 'geeksgeeksfor'));
// false
console.log(isRotated('a', 'a'));
// true