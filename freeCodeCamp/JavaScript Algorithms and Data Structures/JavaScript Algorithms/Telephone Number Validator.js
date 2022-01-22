/*
Return true if the passed string looks like a valid US phone number.

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/

function telephoneCheck(str) {

    /*
    ^ signifies the matching of the beginning of the string.
    (1? ?)? signifies the first capture group exists 0 - 1 times ((capture group)?), consists of 1 0-1 times (1?), and 0-1 whitespaces ( ?).
    (\(\d{3}\) ?|\d{3}[ .-]?){1} signifies one of the nested capture groups within the second capture group exists 1 time ((capture groups){1}).
    \(\d{3}\) ? signifies the first capture group within the second capture group consists of an open parenthesis (\(), any three integers (\d{3}), a closing paranthesis (\)), and 0-1 whitespaces ( ?).
    | signifies OR between the two nested capture groups within the second capture group.
    \d{3}[ .-]? signifies the second capture group within the second capture group consists of any three integers (\d{3}), and either 0-1 whitespaces, periods, or dashes ([ .-]?).
    (\d{3}|\d{3}[ .-]?){1} signiies one of the nested capture groups within the third capture group exists 1 time ((capture groups){1}).
    \d{3} signifies any three integers.
    | signifies OR between the two nested capture groups within the third capture group.
    \d{3}[ .-]? signifies any three integers (\d{3}), and either 0-1 whitespaces, periods, or dashes ([ .-]?).
    (\d{4}){1} signifies the fourth capture group exists 1 time ((capture group){1}).
    \d{4} signifies any four integers.
    $ signifies the matching of the ending of the string.
    */
    const regex = /^(1? ?)?(\(\d{3}\) ?|\d{3}[ .-]?){1}(\d{3}|\d{3}[ .-]?){1}(\d{4}){1}$/;
    return regex.test(str);
}

console.log(telephoneCheck("1 555)555-5555"));
// false
console.log(telephoneCheck("(555-555-5555"));
// false