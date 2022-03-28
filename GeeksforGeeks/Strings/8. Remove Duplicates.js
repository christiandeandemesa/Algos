// Given a string without spaces, the task is to remove duplicates from it.

function removeDups(str) {

    // A set is a collection that can only store unique values.
    let set = new Set();

    // For loop through each index in str, and add that index's character to the set if it is not present in the set.
    for(let i = 0; i < str.length; i++) {
        set.add(str[i]);
    }

    // Return a copy using the spread operator ([...set]), and join all the values into a single string.
    return [...set].join('');
}

console.log(removeDups('zvvo'));
// 'zvo'