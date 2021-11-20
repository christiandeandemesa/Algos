/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain 
any char.
*/

// Refer to the README.md for explanation on functions.
function XO(str) {

    // Removes edge cases of uppercase and lowercase letters.
    str = str.toLowerCase();
    let xCount = 0;
    let oCount = 0;
    for(let i = 0; i < str.length; i ++){

        // Increments count for x.
        if(str[i] === "x"){
            xCount += 1;
        }

        // Increments count for o.
        if(str[i] === "o"){
            oCount += 1;
        }
    }
    if(xCount === oCount){
        return true;
    }
    else{
        return false;
    }
}

console.log(XO('xo'));
// true

console.log(XO("xxOo"));
// true

console.log(XO("xxxm"));
// false

console.log(XO("Oo"));
// false

console.log(XO("ooom"));
// false