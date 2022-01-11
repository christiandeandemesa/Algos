/*
Given an array, X, of N integers, calculate and print the respective mean, median, and mode on separate lines. If your array contains more 
than one modal value, choose the numerically smallest one.
*/

function processData(X) {

    /*
    If you use this code for the HackerRank problem, include the below line of code:
    X = X.split("\n")[1].split(" ").map(substr => parseInt(substr));

    The data is given as:
    10
    64630 11735 14216 99233 14470 4978 73429 38120 51135 67060

    So .split("\n") splits 10 and the string of numbers, and [1] grabs the first index of the split which is everything but 10.
    The .split(" ") separates the string of numbers into an array of substrings (e.g. str = '1 2 3' then str.split(" ") = ['1', '2', '3']).
    The .map() creates a new array with the given function (o => parseInt(o)) which checks if every substring can be converted to an 
    integer. If one of the substrings is not an integer, then it is not included in the new array .map() creates (e.g. arr = ['1', '2', 
    'A'] then arr.map(substr => parseInt(substr)) will have arr = ['1', '2']).
    */

    // Sorts the array numerically from lowest to highest.
    const arr = X.sort((a, b) => a - b);
    let sum = 0;
    let N = 0;

    // Creates an object to be used with mode later on.
    let obj = {};
    for(let i = 0; i < arr.length; i++) {

        // Adds the sum of all the numbers in the array.
        sum += arr[i];

        // Counts how many numbers are in the array.
        N += 1

        // If the number (arr[i]) currently exists in the object as a key (obj[arr[i]]), increments its value by 1.
        if(obj[arr[i]]) obj[arr[i]] += 1;

        // If the number does not exist in the object, add it to the object and give it a value of 1.
        else obj[arr[i]] = 1;
    }

    /*
    The mean is the sum of all the numbers divided by how many numbers there are.
    .toFixed() rounds to the nearest decimal point based on which number you include (e.g. .toFixed(2) will round to two decimal places).
    */
    console.log((sum/N).toFixed(1));

    // If the amount of numbers is even, the median is the two numbers in the middle divided by 2.
    if(N % 2 === 0) console.log((arr[N / 2 - 1] + arr[N / 2]) / 2);

    // If the amount of numbers is odd, the median is the number in the middle.
    else console.log(arr[Math.floor(N / 2)]);
    let modeVal = 0;
    let modeKey;

    /*
    Object.keys() returns every key in the given object (e.g. obj).
    .forEach runs the given function on every element (i.e. key).
    */
    Object.keys(obj).forEach(key => {

        // key is the key in the object, and value is how many times that key appeared (lines 38 - 42).
        let value = obj[key];

        // Changes the mode to the key that has the highest value (i.e. the most occurrences).
        if(value > modeVal) {
            modeVal = value;
            modeKey = key;
        }
    })

    // Prints the mode in the console.
    console.log(modeKey);
} 

processData([64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060]);
/*
43900.6
44627.5
4978
*/