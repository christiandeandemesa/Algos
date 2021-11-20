/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in 
the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

// Refer to the README.md for explanation on functions.
function duplicateCount(str) {
    var emptyObject = {};
    var newStr = str.toLowerCase();
    counter = 0;
    for(var i = 0; i < newStr.length; i++){

        // Counts each unique letter.
        if(!emptyObject[newStr[i]]){
            emptyObject[newStr[i]] = 1;
        } 

        // Counts duplicate letters one time only.
        else if(emptyObject[newStr[i]] < 2){
            emptyObject[newStr[i]] += 1;
            counter += 1;
        }    
    }
    return counter;
}

console.log(duplicateCount(""));
// 0

console.log(duplicateCount("abcde"));
// 0

console.log(duplicateCount("aabbcde"));
// 2

console.log(duplicateCount("aabBcde"));
// 2

console.log(duplicateCount("Indivisibility"));
// 1

console.log(duplicateCount("Indivisibilities"));
// 2