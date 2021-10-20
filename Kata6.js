/* Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand. */

function list(names){
    let str = '';
    if (names.length !== 0){
        let last = names.pop();
        str = names.map((obj, i, arr) => {
            if (i !== arr[arr.length - 1]){
                return obj.name;
            }
        }).join(', ')
        str += str !== '' ? ' & ' + last.name : last.name;
    }
    return str;
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]));
console.log(list([{name: 'Bart'},{name: 'Lisa'}]));
console.log(list([{name: 'Bart'}]));
console.log(list([]));