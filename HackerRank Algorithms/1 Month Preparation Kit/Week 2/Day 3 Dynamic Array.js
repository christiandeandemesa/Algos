/*
Declare a 2-dimensional array, arr, of n empty arrays. All arrays are zero indexed.
Declare lastAnswer, and initialize it to 0.

There are 2 types of queries, given as an array of strings for you to parse:
1. Query: 1 x y
    A. Let idx = ((x ^ lastAnswer) % n).
    B. Append the integer y to arr[idx].
2. Query: 2 x y
    A. Let idx = ((x ^ lastAnswer) % n), where ^ is the bitwise XOR operator.
    B. Assign the value arr[idx][y % size(arr[idx])] to lastAnswer.
    C. Store the new value of lastAnswer to an answers array.
*/
function dynamicArray(n, queries) {
    let arr = [];
    let answers = [];
    let lastAnswer = 0;

    // For each element (query) in queries (array)...
    queries.forEach(query => {

        /*
        tempIdx is the remainder from dividing between the bitwise XOR operator between the second digit in the number and 0, and n.
        For example, if a query = '21' and n = 2, then query[1] = 1, 1 ^ 0 = 1, and 1 % 2 = 1, so tempIdx = 1.
        */
        const tempIdx = (query[1] ^ lastAnswer) % n;

        // Removes the edge case of q[1] in query not being an integer.
        if(arr[tempIdx] == undefined) arr[tempIdx] = [];

        /*
        If the first digit of the query is 1, add the third digit of the query to the tempIdx we found in arr.
        Uses == instead of === because query[0] is a string, and '1' === 1 is false.
        */
        if(query[0] == 1) arr[tempIdx].push(query[2]);

        // If the first ditit of the query is not 1...
        else {

            // Changes lastAnswer and pushes it into answers.
            lastAnswer = arr[tempIdx][query[2] % arr[tempIdx].length];
            answers.push(lastAnswer);
        }
    });
    return answers;
}

console.log(dynamicArray(2, ['105', '117', '103', '210', '211']));
// ['7', '3']