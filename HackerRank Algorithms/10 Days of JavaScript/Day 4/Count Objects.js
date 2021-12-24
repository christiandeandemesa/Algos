/*
Complete the function in the editor. It has one parameter: an array, a, of objects. Each object in the array has two integer properties 
denoted by x and y. The function must return a count of all such objects o in array a that satisfy o.x == o.y.
*/

function getCount(objects) {
    let count = 0;
    // The for...of statement loops over each element (o) in the iterable object (e.g. objects is an array).
    for(let o of objects) {

        // o.x refers to the element (o) then the key in the object (x or y).
        if(o.x == o.y) count++;
    }
    return count;
}

console.log(getCount([{x: 0, y: 5}, {x: 1, y: 1}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 3, y: 4}, {x: 4, y: 5}]));
// 2