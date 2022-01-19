/*
Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. 
However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals 
at once.
*/

function find(str, regex) {
    return str.match(regex);
}

let reCriminals = /C+/;

const str1 = 'C';
const str2 = 'CC';
const str3 = 'P1P5P4CCCcP2P6P3';
const str4 = 'P6P2P7P4P5CCCCCP3P1';
const str5 = '';
const str6 = 'P1P2P3';
const str7 = 'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'

console.log(find(str1, reCriminals));
// ['C']
console.log(find(str2, reCriminals));
// ['CC']
console.log(find(str3, reCriminals));
// ['CCC']
console.log(find(str4, reCriminals));
// ['CCCCC']
console.log(find(str5, reCriminals));
// null
console.log(find(str6, reCriminals));
// null
console.log(find(str7, reCriminals));
// ['CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC']