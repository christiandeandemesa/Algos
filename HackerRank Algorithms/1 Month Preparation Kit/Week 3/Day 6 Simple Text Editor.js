/*
Implement a simple text editor. The editor initially contains an empty string, S. Perform Q operations of the following 4 types:

1. append (W) - Append string W to the end of S.
2. delete (k) - Delete the last k characters of S.
3. print (k) - Print the kth character of S.
4. undo() - Undo the last (not previously undone) operation of type 1 or 2, reverting S to the state it was in prior to that operation.
*/

function processData(input) {

    // Creates a lines array that holds elements split by new lines.
    let lines = input.split('\n');

    // Initializes S as an empty string, and last as an empty array.
    let S = '';
    let last = [];

    // For loop through every element in lines.
    for(let i = 1; i <= parseInt(lines[0]); i++) {

        // opNum is the operation number (e.g. 1 through 4).
        let opNum = parseInt(lines[i].split(' ')[0]);

        // opCmd is the operation command attached to the operation number.
        let opCmd = lines[i].split(' ')[1];

        // Uses a switch statement on opNum.
        switch(opNum) {

            // If opNum is 1, add the current S as an element in last and concatenate S and opCmd into a single string.
            case 1:
                last.push(S);
                S += opCmd;
                break;

            /*
            If opNum is 2, add the current S as an element in last and create a new string without the last k characters (S.length - 
            parseInt(opCmd)).
            */
            case 2:
                last.push(S);
                S = S.substring(0, S.length - parseInt(opCmd));
                break;

            // If opNum is 3, print the kth character (S.charAt(parseInt(opCmd) - 1)) to the console.
            case 3:
                console.log(S.charAt(parseInt(opCmd) - 1));
                break;

            // If opNum is 4, remove the last element in last and make it S.
            case 4:
                S = last.pop();
                break;
        }
        
    }
}