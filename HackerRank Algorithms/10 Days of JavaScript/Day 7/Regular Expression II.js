/*
Complete the function in the editor below by returning a RegExp object, re, that matches any string str satisfying both of the following 
conditions:

1. String s starts with the prefix Mr., Mrs., Ms., Dr., or Er.
2. The remainder of string str (i.e., the rest of the string after the prefix) consists of one or more upper and/or lowercase English 
alphabetic letters (i.e., [a-z] and [A-Z]).
*/

/*
The version of the code required to pass HackerRank is shown below. The other code included works in VS code.

function regexVar() {
    let re = /^[MDE][rs]+\.[A-Za-z]+$/;
    return re;
}
*/
function regexVar(str) {

    // Refer to the Regex Notes for more detail.
    const re = /^[MDE][rs]+\.[A-Za-z]+$/;
    return result = re.test(str);
}

console.log(regexVar('Mr.X'));
// true

console.log(regexVar('Mrs.Y'));
// true

console.log(regexVar('Dr#Joseph'));
// false

console.log(regexVar('Er .Abc'));
// false
