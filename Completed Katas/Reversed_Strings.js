// Complete the solution so that it reverses the string passed into it.

// Refer to the README.md for explanation on functions.
function solution(str){
    var newStr = "";

    // Goes through the string from the last value to the first value.
    for(var i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}

console.log(solution("Hello World"));
// 'dlroW olleH'

console.log(solution("Javascript"));
// 'tpircsavaJ'

console.log(solution(" "));
// ' '