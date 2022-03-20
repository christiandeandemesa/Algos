// Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

function reverseWords(S) {

    /*
    .split('.') takes the string and creates an array where each element is a string separated by a period (e.g. s = 'Hello.World' and s.split('.') = ['Hello', 'World']).
    .reverse() reverses the element order in the array.
    .join('.') joins all the elements in the array into a string where each element has a period in between them.
    */
    return S.split('.').reverse().join('.');
}

console.log(reverseWords('i.like.this.program.very.much'));
// 'much.very.program.this.like.i'