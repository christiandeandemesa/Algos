/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle 
character. If the word's length is even, return the middle 2 characters.
*/

// Refer to the README.md for explanation on functions.
const getMiddle = s => {return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1)};

console.log(getMiddle("test"));
// 'es'

console.log(getMiddle("testing"));
// 't'

console.log(getMiddle("middle"));
// 'dd'

console.log(getMiddle("A"));
// 'A'