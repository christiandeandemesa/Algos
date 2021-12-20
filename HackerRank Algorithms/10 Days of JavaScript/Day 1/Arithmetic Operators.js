/*
Complete the following functions in the editor below:

1. getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
2. getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.
*/

function getArea(length, width) {

    /*
    This line declares a variable, initializes it with length times width, and returns it.
    When you use return in a function, the called function becomes whatever is returned.
    */
    return area = length * width;
}

function getPerimeter(length, width) {

    // Note that PEMDAS is followed.
    return perimeter = length * 2 + width * 2;
}

// Note in order to get what is returned in the function to print to the console, we need to console.log the called function.
console.log(getArea(4, 4));
// 16

console.log(getPerimeter(2, 2));
// 8