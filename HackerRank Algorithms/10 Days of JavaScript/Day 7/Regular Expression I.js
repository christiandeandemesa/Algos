/*
Complete the function in the editor below by returning a RegExp object, re, that matches any string s that begins and ends with the same 
vowel. Recall that the English vowels are a, e, i, o, and u.
*/

/*
The version of the code required to pass HackerRank is shown below. The other code included works in VS code.

function regexVar() {
    let re = /^([aeiou]).+\1$/;
    return re;
}
*/
function regexVar(str) {

    // Refer to the Regex Notes for more detail.
    const re = /^([aeiou]).+\1$/;

    // The test() method checks if the given string matches the given regex, and returns true or false.
    return result = re.test(str);
}

/*
The above regex (const re = ...) is known as an expression literal, and forward slashes (/) are required to hold the regex.

You could write the expression literal as RegExp Objects as shown below:

const re = new RegExp('^([aeiou]).+\1$');

Notice how RegExp Objects use single quotes instead of forward slashes.
*/

console.log(regexVar('aba'));
// true

console.log(regexVar('abe'));
// false

console.log(regexVar('abc'));
// false