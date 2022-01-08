// Complete the function below by returning a RegExp object, re, that matches every integer in some string str.

/*
The version of the code required to pass HackerRank is shown below. The other code included works in VS code.

function regexVar() {
    let re = /\d+/g;
    return re;
}
*/

function regexVar(str) {

    /*
    There are optional flags you can add after the regex, and the g (i.e. global) flag indicates that the regex should be tested against 
    every possible match in the string.

    Refer to the Regex Notes for more detail.
    */
    const re = /\d+/g;

    // The match() method returns an array of all possible matches a given string has against a given regex.
    return result = str.match(re);
}

console.log(regexVar('102, 1948948 and 1.3 and 4.5'));
// ['102', '1948948', '1', '3', '4', '5']

console.log(regexVar('1 2 3'));
// ['1', '2', '3']