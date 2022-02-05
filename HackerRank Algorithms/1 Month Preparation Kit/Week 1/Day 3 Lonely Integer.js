// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {

    // Instantiates an empty object.
    let obj = {};

    // For each element in array a...
    for(let elem of a) {

        // If the object has a key with that element, increment its value by 1.
        if(obj[elem]) obj[elem]++;

        // If the object does not have a key with that element, set its value to 1.
        else obj[elem] = 1;
    }

    // For each key-value pair in the object as a two-dimensional array.
    for(let [elem, freq] of Object.entries(obj)) {

        // If the value is equal to 1, return its key.
        if(freq === 1) return elem;
    }
    return 'There is no unique element in the array';
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));
// 4
console.log(lonelyinteger([1, 2, 3, 3, 2, 1]));
// 'There is no unique element in the array'