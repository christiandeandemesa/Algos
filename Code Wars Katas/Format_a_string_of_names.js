/* 
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
*/

// Refer to the README.md for explanation on functions.
function list(names){
    let str = '';

    // Removes the edge case of an empty array.
    if (names.length !== 0){
        let last = names.pop();
        str = names.map((obj, i, arr) => {

            // Returns each of the values in the object (e.g. Bart).
            if (i !== arr[arr.length - 1]){
                return obj.name;
            }
        }).join(', ')

        // Adds & between the entire string and last, which is the last value in the object.
        str += str !== '' ? ' & ' + last.name : last.name;
    }
    return str;
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));
// 'Bart, Lisa, Maggie, Homer & Marge'

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]));
// 'Bart, Lisa & Maggie'

console.log(list([{name: 'Bart'},{name: 'Lisa'}]));
// 'Bart & Lisa'

console.log(list([{name: 'Bart'}]));
// 'Bart'

console.log(list([]));
// ''