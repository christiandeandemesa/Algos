/*
Two friends like to pool their money and go to the ice cream parlor. They always choose two distinct flavors and they spend all of their 
money.

Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.
*/

function icecreamParlor(m, arr) {

    // Initializes an empty hash map.
    const hash = {};

    // For loop through every element in arr.
    for(let i = 0; i < arr.length; i++) {

        /*
        If hash[arr[i]] exists as a key in the hash map, add the other index as the value to its key.
        If hash[arr[i]] does not exist as a key in the hash map, set the value as its index.
        */
        hash[arr[i]] ? hash[arr[i]].push(i + 1) : hash[arr[i]] = [i + 1];
    }

    // For...of statement through every element (price) in arr.
    for(let price of arr) {

        /*
        If the m - price exists as a key in the hash map and the price is not equal to itself, return price's index and m - price's 
        index.
        Then flatten the two-dimensional array.
        */
        if(hash[m - price] !== undefined && price !== m - price) return [hash[price], hash[m - price]].flat();
    }
}

console.log(icecreamParlor(6, [1, 3, 3, 4, 5, 6]));
// [1, 4]