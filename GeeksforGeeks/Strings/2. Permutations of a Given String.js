// Given a string S. The task is to print all permutations of a given string in lexicographically sorted order.

function find_permutation(S) {

    // Removes the edge case of S being an empty string.
    if(S.length === 0) return 'Please enter a string';

    // Break case for when S has only one character.
    else if(S.length === 1) return S;

    // permutationArr will hold all of the permutations.
    let permutationArr = [];

    // For loop through each index in the string.
    for(let i = 0; i < S.length; i++) {

        // char is the letter at the the current index.
        let char = S[i];

        /*
        If the letter has already been run through the find_permutations function, skip the next lines of code.
        This is used to decrease runtime for redundencies (e.g. S = ['aab'] would have 'aab' added twice in permutationArr, so the below
        code only adds 'aab' once).
        */
        if(S.indexOf(char) !== i) continue;

        // otherChars is all the letters in the string without char.
        let otherChars = S.slice(0, i) + S.slice(i + 1);

        // Runs a for loop on our function recursively for the otherChars, and the returned value from the break case is assigned to the permutation variable.
        for(let permutation of find_permutation(otherChars)) {

            // Combines char and permutation as a string, then adds it to the end of the permuationArr array.
            permutationArr.push(char + permutation);
        }
    }

    /*
    To visualize the above:
    If S = 'ABC', permuationArr = [], char = 'A', and otherChars = 'BC'.
    Then in the first recursion, S = 'BC', permutationArr = [], char = 'B', and otherChars = 'C'.
    Then in the second recursion, S = 'C' and it returns 'C' because S.length is equal to 1.
    Back to the first recursion, permuation = 'C', so char + permutation = 'BC' and permuationArr = ['BC'].
    Back to before the recursion, permutation = 'BC', so char + permutation = 'ABC' and permutationArr = ['ABC'].
    */
    return permutationArr;
}

console.log(find_permutation('ABC'));
// ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']
console.log(find_permutation(''));
// 'Please enter a string'