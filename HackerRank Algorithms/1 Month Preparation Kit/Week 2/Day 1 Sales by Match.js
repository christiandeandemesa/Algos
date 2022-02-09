/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how 
many pairs of socks with matching colors there are.
*/

function sockMerchant(n, arr) {

    /*
    Instantiates an empty object to hold key-value pairs of socks.
    Instantiates totalPairs to track how many pairs of socks.
    */
    let obj = {};
    let totalPairs = 0;

    // For every element in arr...
    for(let elem of arr) {

        // If the object has elem as a key, increment its value.
        if(obj[elem] > 0) obj[elem] += 1;

        // If the object does not have elem a key, add elem as a key and give it a value of 1.
        else obj[elem] = 1;
    }

    // For every key in obj...
    for(let key in obj) {

        /*
        Instantiates pairs as the value (obj[key]) divided by 2, then floored for the case of odd-number values.
        Adds that key's pairs to totalPairs.
        */
        let pairs = Math.floor(obj[key]/2);
        totalPairs += pairs;
    }
    return totalPairs;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));