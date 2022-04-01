/*
Your task is to implement the function strstr. The function takes two strings as arguments (s, x) and  locates the occurrence of the string x in the string s. The 
function returns and integer denoting the first occurrence of the string x in s (0 based indexing). You are not allowed to use inbuilt functions.
*/

function strstr(s, x) {

    /*
    For loop through each index in s, but we stop at the s.length - x.length index.

    For example:
    If s = 'abcde', x = 'cde', s.length = 5, and x.length = 3.
    The for loop runs a maximum of 3 times because it will use pseudo-window sliding to look at ['abc'], ['bcd'], and ['cde'].
    There is no need to look at ['de'] and ['e'] for optimization purposes.
    */
    for (let i = 0; i <= s.length - x.length; i++) {

        // We instantiate j here for the for loop and if statement.
        let j;

        // For loop through each index in x.
        for (j = 0; j < x.length; j++)

            // If the character at i plus j's index in s is not equal to j's index in x, break because the entirety of the x substring was not found.
            if (s[i + j] !== x[j]) break;

        /*
        If the current index is equal to x's length, then the x substring does exist in the s string, so return i which is the index the x substring starts at in the s 
        string.
        */
        if (j === x.length) return i;
    }

    // If the first for loop breaks, then return the below string because the x substring was not found in the s string.
    return `${x} does not exist in ${s}`;
}

console.log(strstr('GeeksForGeeks', 'For'))
// 5
console.log(strstr('GeeksForGeeks', 'Fr'))
// 'Fr does not exist in GeeksForGeeks'