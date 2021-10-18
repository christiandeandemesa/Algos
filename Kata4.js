// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(str) {
    var emptyObject = {};
    var newStr = str.toLowerCase();
    counter = 0;
    for(var i = 0; i < newStr.length; i++){   
        if(!emptyObject[newStr[i]]){
            emptyObject[newStr[i]] = 1;
        } 
        else if(emptyObject[newStr[i]] < 2){
            emptyObject[newStr[i]] += 1;
            counter += 1;
        }    
    }
    return counter;
}

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));