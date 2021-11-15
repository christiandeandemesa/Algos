/*
You will be given a number and you will need to return it as a string in Expanded Form. 

NOTE: All numbers will be whole numbers greater than 0.
*/

// Refer to the README.md for explanation on functions.
function expandedForm(num) {

    // Turns num into an array of single digit numbers as strings.
    num = String(num).split('');
    let expArr = [];
    for(let i = 0; i < num.length; i++) {

        // Removes any number that could just be a string of zeroes.
        if(num[i] > 0) {

            // Grabs the first non-zero number
            let expNum = num[i];
            let j = 1;

            // Adds the necessary number of zeroes to each number.
            while(num.length - i - j > 0) {
                expNum += '0';
                j++;
            }

            // Adds the completed number to an array.
            expArr.push(expNum);
        }
    }

    // Turns the array into a string with + between each number.
    return expArr.join(' + ');
}

/*
My second attempt. See if you can figure out how it works!

function expandedForm(num) {
    return String(num)
        .split('')
        .map((num, idx, arr) => num + '0'.repeat(arr.length - idx - 1))
        .filter((num) => Number(num) != 0)
        .join(' + ');
}
*/

console.log(expandedForm(12)); // '10 + 2'
console.log(expandedForm(42)); // '40 + 2'
console.log(expandedForm(70304)); // '70000 + 300 + 4'