/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
*/

var reverseWords = function(s) {

    /*
    This is the version I attempted to do with two pointers, but lines 15 and 16 would not take on the new value. 
    Any help would be appreciated!

    s = s.split(' ');
    for(let i = 0; i < s.length; i++) {
        let left = 0;
        let right = s[i].length - 1;
        while(left <= right) {
            let temp = s[i][left];
            s[i][left] = s[i][right];
            s[i][right] = temp;
            left++
            right--
        }
    }
    return s.join(' ');
    */

    s = s.split(' ');
    for(let i = 0; i < s.length; i++) {

        // s[i] is each word (e.g. "Let's").
        s[i] = s[i].split('').reverse().join('');
    }
    return s.join(' ');
}

console.log(reverseWords("Let's take LeetCode contest"));
// "s'teL ekat edoCteeL tsetnoc"

console.log(reverseWords("God Ding"));
// "doG gniD"