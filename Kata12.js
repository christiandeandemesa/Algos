/* Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :] */

function countSmileys(arr){
    let count = 0;
    if(arr.length === 0){
        return count;
    }
    for(let i = 0; i < arr.length; i++){
        let face = arr[i].split("");
        if(face[0] === ':' || ';'){ // Why does my if statement accept everything?
            if(face[1] === '-' || '~'){ // Why does my if statement accept everything?
                console.log(face[1]);
                console.log(face[1] === '-' || '~');
                if(face[2] === ')' || 'D'){ // Why does my if statement accept everything?
                    count++;
                }
            }
            else if(face[1] === ')' || 'D'){
                count++;
            }
        }
    }
    return count;
}

/* function countSmileys(arr) {
    let count = 0;
    let smileyFace = [
        ":)",
        ";)",
        ":-)",
        ";-)",
        ":~)",
        ";~)",
        ":D",
        ";D",
        ":-D",
        ";-D",
        ":~D",
        ";~D"
    ];
    arr.map(face => {
        smileyFace.map(validFace => {
            if(face.includes(validFace)){
                count++;
            }
        });
    });
    return arr.length === 0 ? 0 : count;
} */

console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;