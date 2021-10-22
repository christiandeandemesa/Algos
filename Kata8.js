// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    str = str.toLowerCase();
    let xCount = 0;
    let oCount = 0;
    for(let i = 0; i < str.length; i ++){
        if(str[i] === "x"){
            xCount += 1;
        }
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
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));