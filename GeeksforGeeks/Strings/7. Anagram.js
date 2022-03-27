/*
Given two strings a and b consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string 
is another string that contains the same characters, only the order of characters can be different. For example, act and tac are an anagram of each other.
*/

function isAnagram(a, b) {

    /*
    .split('') splits the string into an array where each character is an element.
    .sort() sorts all the characters in the array alphabetically.
    .join('') joins all the elements in an array into a single string.
    If the sorted a and b strings are equal, they are anagrams.
    */
    if(a.split('').sort().join('') === b.split('').sort().join('')) return 'YES';

    // If the sorted a and b strings are not equal, they are not anagrams.
    else return 'NO';
}

console.log(isAnagram('geeksforgeeks', 'forgeeksgeeks'));
// 'YES'
console.log(isAnagram('b', 'de'));
// 'NO'