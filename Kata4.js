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