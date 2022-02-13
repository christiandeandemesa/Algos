/*
Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.
*/

function gridChallenge(grid) {

    // Instantiates j and i to go through each character [i] in each string [j] (e.g. grid[j][i]).
    let j = 1;
    let i = 0;

    // Sorts every string at each element in grid.
    grid = grid.map(str => str.split('').sort().join(''));

    // While loop runs indefinitely.
    while(true) {

        // If j is the number of elements in grid, increments i and resets j to 1.
        if(j === grid.length) {
            i++;
            j = 1;
        }

        // If i is the length of the first element in grid, return 'YES'.
        if(i === grid[0].length) return 'YES';

        /*
        If the current character [i] in the string before [j - 1] is alphabetically before the current character [i] in the current string 
        [j], return 'NO'.
        */
        if(grid[j - 1][i] > grid[j][i]) return 'NO';

        // Increments j to move through each element in grid.
        j++;
    }
}

console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']));
// 'YES'