// Complete the solution so that it reverses the string passed into it.

function solution(str){
    var newStr = "";
    for(var i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}

console.log(solution("Hello World"));
console.log(solution("Javascript"));
console.log(solution(" "));